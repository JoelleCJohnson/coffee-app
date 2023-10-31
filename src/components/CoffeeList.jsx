import { useEffect, useState } from "react"

export default function CoffeeList() {
    const [coffees, setCoffees] = useState()
    const [button, setButton] = useState('Iced')
    const [temp, setTemp] = useState('hot')

    useEffect(() => {
        fetch(`https://api.sampleapis.com/coffee/${temp}`)
            .then(res => res.json())
            .then(setCoffees)
            .catch(alert)
    }, [temp])

    function buttonClick() {
        //is temp hot?
        if(temp == 'hot'){
            //if yes, button should say Iced
            setButton('Hot')
            setTemp('iced')
        } else {
            //if not, button should say Hot
            setButton('Iced')
            setTemp('hot')
        }
    }

    return (
        <main>
            <div>
                <button onClick={buttonClick}>{`${button}`}</button>
            </div>
            <section>
                {coffees && //shorthand if in react, doesn't require an else

                    coffees.map(coffee => (
                        <div key={coffee.id} class="coffee-card">
                            <img src={coffee.image} alt={coffee.title} />
                            <h2>{coffee.title}</h2>
                            <p>{coffee.description}</p>
                        </div>
                    ))
                }
            </section>
        </main>
    )
}