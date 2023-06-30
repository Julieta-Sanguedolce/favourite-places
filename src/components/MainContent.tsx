import Place from "./Place";

function MainContent(): JSX.Element {
    return (
      <section>
        <Place
          title = {"Happiness"}
          place = {"Rosario"}
          country = {"Argentina"}
          image = {"https://media.istockphoto.com/id/1442921306/photo/ships-in-parana-river-in-front-of-rosario-city.webp?b=1&s=170667a&w=0&k=20&c=_YglQaK_CKKT9Tkifg_FNBi_oyiFwpjsOcf8F-vuGFk="}
          mapUrl = {"https://goo.gl/maps/gtaZLnYAuTZVZJcVA"}
          comment = {"All my happiest memories are (for now) there"}
        />
        <Place
          title = {"Love"}
          place = {"Tucuman"}
          country = {"Argentina"}
          image = {"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/04/da/caption.jpg?w=600&h=400&s=1"}
          mapUrl = {"https://goo.gl/maps/nUk1v1DDPJ2ppNT16"}
          comment = {"You could call this my second home"}
        />
        <Place
          title = {"Growth"}
          place = {"London"}
          country = {"United Kingdom"}
          image = {"https://upload.wikimedia.org/wikipedia/commons/6/67/London_Skyline_%28125508655%29.jpeg"}
          mapUrl = {"https://goo.gl/maps/P4TGzFLarqD4Pozw9"}
          comment = {"The city that took me in and is making me grow in many ways!"}
        />
      </section>
    );
  }
  
  export default MainContent;