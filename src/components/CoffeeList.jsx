import { useState } from "react"

export default function CoffeeList() {
    const [coffees, setCoffees] = useState()
    const getCoffees = (temperature) => {
        fetch(`https://api.sampleapis.com/coffee/${temperature}`)
            .then(res => res.json())
            .then(setCoffees)
            .catch(alert)
    }
    return (
        <main>
            <div>
                <button onClick={() => getCoffees('hot')}>Hot</button>
                <button onClick={() => getCoffees('iced')}>Iced</button>
            </div>
            <section>
                {coffees && 
                
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