import requests
from bs4 import BeautifulSoup
import csv

# URL of the webpage you want to scrape
url = 'https://www.finki.ukim.mk/mk/content/%D1%81%D0%BE%D1%84%D1%82%D0%B2%D0%B5%D1%80%D1%81%D0%BA%D0%BE-%D0%B8%D0%BD%D0%B6%D0%B5%D0%BD%D0%B5%D1%80%D1%81%D1%82%D0%B2%D0%BE-%D0%B8-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%81%D0%BA%D0%B8-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B8'

# Sending a GET request to the URL
response = requests.get(url)

# Checking if the request was successful (status code 200)
if response.status_code == 200:
    # Parsing the HTML content of the webpage
    soup = BeautifulSoup(response.text, 'html.parser')

    # Here you can write your code to extract data from the webpage
    # For example, let's say you want to extract all the links from the page
    # links = soup.find_all('a')
    elements = soup.select('.views-field-views-conditional.views-field')
    a_tags = elements

    print(elements[2].text)

    for element in elements:
        print(element.text)

    # for link in links:
    #     print(link.get('href'))
# else:
#     print('Failed to fetch the webpage:', response.status_code)
