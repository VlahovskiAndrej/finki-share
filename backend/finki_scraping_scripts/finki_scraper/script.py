from selenium import webdriver
from selenium.common import NoSuchElementException
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import json


def print_nested_dict(d, indent=0):
    for key, value in d.items():
        if isinstance(value, dict):
            print('  ' * indent + f"{key}:")
            print_nested_dict(value, indent + 1)
        else:
            print('  ' * indent + f"{key}: {value}")


chrome_driver_path = 'chromedriver.exe'
website_url = 'https://www.finki.ukim.mk/program/SIIS23/mk'
json_file_path = 'output.json'

service = Service(chrome_driver_path)
options = webdriver.ChromeOptions()
options.add_experimental_option("detach", True)

driver = webdriver.Chrome(options=options, service=service)
driver.get(website_url)

subject_buttons = driver.find_elements(by=By.TAG_NAME, value='a')
subjects_dict = dict()
for subject_button in subject_buttons:
    element_href = subject_button.get_attribute("href")

    if str(element_href).startswith("https://www.finki.ukim.mk/subject/"):
        subject_name = subject_button.text
        subjects_dict[subject_button.text] = dict()
        subjects_dict[subject_button.text]["name"] = subject_button.text
        subjects_dict[subject_button.text]["url"] = element_href
        subject_button.click()

        rows = driver.find_elements(by=By.TAG_NAME, value='tr')
        for i in range(len(rows)):

            if 0 <= i <= 8 or 12 <= i <= 13 or 29 <= i <= 31:
                try:
                    second_td = rows[i].find_element(by=By.XPATH, value='./td[2]')
                    third_td = rows[i].find_element(by=By.XPATH, value='./td[3]')
                    subjects_dict[subject_name][second_td.text] = third_td.text
                except NoSuchElementException:
                    print("Third or Second TD not found")

            if 9 <= i <= 11:
                try:
                    second_td = rows[i].find_element(by=By.XPATH, value='./td[2]')
                    first_p = second_td.find_element(by=By.XPATH, value='.//p')
                    second_p = second_td.find_element(by=By.XPATH, value='.//p[2]')
                    subjects_dict[subject_name][first_p.text] = second_p.text
                except NoSuchElementException:
                    print("First or Second p not found")

            if i == 18:
                try:
                    second_td = rows[i].find_element(by=By.XPATH, value='./td[2]')
                    subjects_dict[subject_name]['Начин на оценување'] = dict()
                except NoSuchElementException:
                    print("Second TD 'Начин на оценување' not found")

            if 19 <= i <= 22:
                try:
                    second_td = rows[i].find_element(by=By.XPATH, value='./td[2]')
                    third_td = rows[i].find_element(by=By.XPATH, value='./td[3]')
                    subjects_dict[subject_name]['Начин на оценување'][second_td.text] = third_td.text
                except NoSuchElementException:
                    print("Third or Second TD not found in 'Начин на оценување'")

            if i == 23:
                try:
                    subjects_dict[subject_name]['Критериуми за оценување'] = dict()
                    third_td = rows[i].find_element(by=By.XPATH, value='./td[3]')
                    fourth_td = rows[i].find_element(by=By.XPATH, value='./td[4]')
                    subjects_dict[subject_name]['Критериуми за оценување'][third_td.text] = fourth_td.text
                except NoSuchElementException:
                    print("Third or Forth TD not found")

            if 24 <= i <= 28:
                try:
                    first_td = rows[i].find_element(by=By.XPATH, value='./td')
                    second_td = rows[i].find_element(by=By.XPATH, value='./td[2]')
                    subjects_dict[subject_name]['Критериуми за оценување'][first_td.text] = second_td.text
                except NoSuchElementException:
                    print("First or Second TD not found in 'Критериуми за оценување'")

        driver.back()

with open(json_file_path, 'w', encoding='utf-8') as json_file:
    json.dump(subjects_dict, json_file, ensure_ascii=False, indent=4)

driver.quit()
