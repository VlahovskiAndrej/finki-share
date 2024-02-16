export default function Home(){
    return (
        <div className="image-container">
            <img style={{width: '100vw', height: '50vw',  filter: 'brightness(55%)'}} src="https://raw.githubusercontent.com/gist/AzdineElJattari/beaef920a209a60bab82a8a1d01e5d54/raw/88f20c9d749d756be63f22b09f3c4ac570bc5101/programming.gif" alt='gif_image'/>
            <div className="image-text">
            {/*<div className="text-left">*/}
                <p>Оваа страница е посветена на споделување на актуелни информации,
                    ресурси и материјали поврзани за Факултетот за информатичи науки и компјутерско инженерство (ФИНКИ).
                    Тука ќе најдете бројни линкови и референци, вклучувајќи вести од светот на ИТ,
                    образовни материјали, студентски организации и совети за различни аспекти на програмирањето.
                    Оваа страница е дизајнирана за да ги обедини студентите од ФИНКИ,
                    поддржувајќи го непрекинатото учење и споделување на знаењето во оваа брзо развивачка област. </p>
            </div>
        </div>
    );

}