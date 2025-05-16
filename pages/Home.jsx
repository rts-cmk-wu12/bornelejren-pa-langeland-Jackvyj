import hus from "/components/img/hus_foran.jpg"

function Home() {
  return (
    <div className="space-y-4">
      <img className="center hus" src={hus} alt="" />
      <h1 className="text-3xl font-bold center">Velkommen</h1>
      <p className='center'>
        <p> Børnelejren på Langeland er en forening, der udelukkende har til formål at sende dårligt
        stillede børn og unge sammen med deres pædagoger på et ophold i landlige omgivelser på
        det naturskønne Sydlangeland.
        </p>
        <p>
        Der er mange børn i verden, der ikke har det så godt, som de burde have det. Det gælder
        desværre også i Danmark. Der er børn med medfødte handicap, børn der er blevet
        alvorligt syge, børn der lider under omsorgssvigt eller bliver udsat for overgreb, børn der
        har mistet én af eller begge deres forældre, børn der er tvangsfjernet fra deres hjem og
        familie, børn der bliver mobbet i skolen, børn der vokser op i meget fattige familier, børn
        fra skilsmisse- og sammenbragte familier - vi kender allesammen et barn, der tilhører en af
        disse grupper, og det er disse børn, vi gerne vil gøre noget for.
        </p>
        Foreningen Børnelejren på Langeland samler penge ind fra erhvervslivet, fonde og private
        til at sende dårligt stillede børn på et velfortjent lejrophold på Søgård. Hjælp os med at
        hjælpe dem!
      </p>
    </div>
  );
}

export default Home;
