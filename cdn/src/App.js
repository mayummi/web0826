// App 컴포넌트
function App(){
    return (
        <div className="container">
            {cards.map((card, index)=> (
                <card 
                    key={index}
                    aimg={card.cimg}
                    atit={card.ctit}
                    aage={card.cage}
                    arate={card.crate}
                    adate={card.cdate}
                    aheart={card.cheart}
                
                />
            ))}
        </div>
    );
}