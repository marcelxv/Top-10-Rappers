import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function Rapper({nome, numero, biografia, geniusLink, image, magnaOpus}) {
  return <div className="card">
      <img src={image}></img>
      <h1>{numero}. {nome}</h1>
      <p class="bio">{biografia}</p>
      <a href={geniusLink}>Link to Genius</a> /  <a className="magnaOpus" href={magnaOpus}>The Magna Opus</a>

  </div>
}

function App() {
  return (
  <div className="container0">
    <h3>THE</h3>
    <h1>10 Most Lengendary Rappers 🎤</h1>
    <h2>Alive or dead, they're all legends. 👨🏾‍🦲🧔🏾‍♂️👨🏿‍🦱👨🏽‍🦲✊🏿</h2>
      <Rapper magnaOpus="https://www.youtube.com/watch?v=6uikJTnmtgw" image ="https://images.genius.com/dab4680bbb0569024ef3df3d1e87c277.570x570x1.jpg" geniusLink="https://genius.com/artists/Jay-z" nome="Jay-Z" numero="1" biografia="Having sold over 100 million records worldwide, and holding the solo artist record of 14 Billboard 200 #1 albums, Shawn “JAY-Z” Carter is possibly the most talented, accomplished and respected rapper of all-time. He has released 13 studio albums and five collaborative albums over his 30-year career." /> 
      <Rapper image="https://images.genius.com/33a2b0084e55b6228293793b44bfa468.1000x1000x1.jpg" geniusLink="https://genius.com/artists/Kanye-west" nome="YE (former Kanye West)" numero="2" biografia="The ubiquitous Kanye West—from his famous quip, “George Bush doesn’t care about black people,” to “I'ma let you finish,” to marrying Kim Kardashian, to announcing that he’s running for President, and admitting his love for President Trump—you can see that he’s a staple of the tabloids and the entertainment world, industry-wide." /> 
      <Rapper image="https://images.genius.com/8254edd9e7aeb6bf10c36f1e81e78dcf.580x580x1.jpg" geniusLink="https://genius.com/artists/2pac" nome="Tupac" numero="3" biografia="Tupac Amaru Shakur (June 16, 1971 – September 13, 1996), known by his stage names 2Pac and Makaveli, was an actor and a highly influential rapper who is considered by many to be the greatest of all-time due to the revolutionary spirit and thug passion he mixed into his music. During his music career, he made appearances in movies such as his acclaimed debut in Juice (1992), Poetic Justice (1993), and Above the Rim (1994)." /> 
      <Rapper image="https://images.genius.com/664976b54a605d6ac0df2415a8ccac16.564x564x1.jpg" geniusLink="https://genius.com/artists/The-notorious-big" nome="Notorius B.I.G" numero="4" biografia="Considered by many to be one of the greatest rappers of all time, The Notorious B.I.G. was a major figure in both hardcore hip-hop and 90’s pop music until his murder in 1997 at age 24. He’s best known for his #1 hits “Hypnotize” and “Mo’ Money, Mo’ Problems,” his top 10 hits “One More Chance (Stay with Me Remix)” and “Big Poppa,” and his iconic early single “Juicy.”" />
      <Rapper image="https://images.genius.com/64b15c9489c65f5bf8f6577334347404.434x434x1.jpg" geniusLink="" nome="Andre 3000" numero="5" biografia="Often regarded as one of the best rappers of all time, André Lauren Benjamin, better known by his stage name, André 3000, is an American singer-songwriter, rapper, multi-instrumentalist, record producer, and actor, best known for his work as one-half of the hip-hop duo OutKast alongside his partner in rhyme, Big Boi." />
      <Rapper image="https://images.genius.com/c674178296f3d65792a66f851fbc62fc.900x900x1.png" geniusLink="#" nome="Eminem" numero="6" biografia="A legendary hip-hop icon who started as an underground battle rapper in Detroit, Michigan Marshall “Eminem” Bruce Mathers III (1972 – present) has developed a career full of controversy, wild swings, and some of the most noteworthy bars in the history of the genre." />
      <Rapper image="https://images.genius.com/f08637c8cfdeaab4dfbf0631424001ec.640x640x1.jpg" geniusLink="#" nome="Kendrick Lamar" numero="7" biografia="Kendrick Lamar Duckworth (born June 17, 1987) is an American rapper and songwriter from Compton, CA. He first gained major attention after the release of his 2010 mixtape O(verly) D(edicated). In 2015, he released To Pimp a Butterfly to widespread acclaim. The album debuted at No. 1 on the Billboard 200 Albums Chart. The following year, untitled unmastered. was released by surprise. In April of 2017, Kendrick released DAMN. on Good Friday." />
      <Rapper image="https://images.genius.com/aa8b9dce2492fe413c23f77b643788fd.914x914x1.jpg" geniusLink="#" nome="Lil Wayne" numero="8" biografia="Dwayne Michael Carter, Jr., better known by his stage name Lil Wayne, grew up in the Hollygrove neighborhood of New Orleans, Louisiana. At the age of nine, Lil Wayne joined Cash Money Records as the youngest member of the label, and half of the duo, The B.G.‘z, with B.G.. In 1997, Lil Wayne joined the group Hot Boys, which also included rappers Juvenile, B.G., and Young Turk. Lil Wayne gained most of his success with the group’s major selling album Guerrilla Warfare, released in 1999. He has been listed in the 2012 Guinness Book Of World Records for the record of Most US Hot 100 Hits By A Rap Artist with 64 hits between 1999 and 2010." />
      <Rapper image="https://images.genius.com/8ae5a5e5e030cb67814165bd038af48f.1000x1000x1.jpg" geniusLink="#" nome="Nicki Minaj" numero="9" biografia="Born December 8, 1982, Onika Tanya Maraj-Petty, better known by her stage name Nicki Minaj, is a Trinidadian-American rapper, actress, singer, songwriter, and entrepreneur. Nicki was discovered by Lil Wayne via her mixtapes Sucka Free and Beam Me Up Scotty, and broke into the mainstream as an artist signed to Wayne’s label Young Money Entertainment. Her first successful songs, “Your Love,” “Moment 4 Life” (with Drake), and the smash-hit “Super Bass,” are featured on her 2010 chart-topping debut album Pink Friday." />
      <Rapper image="https://images.genius.com/9e6f453d188d0b0a3046f0898f4101f2.1000x1000x1.jpg" geniusLink="#" nome="J. Cole" numero="10" biografia="Jermaine Lamarr Cole (b. January 28th, 1985), better known as J. Cole, is a rapper and producer who was born in Frankfurt, Germany and raised in Fayetteville, North Carolina. He gained a passion for rap at a young age and first went by the names Blaza and Therapist (the latter was given to him by Bomb Sheltah, a respected rap group from Fayetteville) before settling on his own name." /> 

<div className="footer">Desenvolvido por @marcelxv usando Javascript, CSS, HTML, React e mais de 20 anos ouvindo rap!</div>
  </div>
  

  )
  
}

ReactDOM.render(
  <App />,
  
  document.getElementById('root')
)


/* Com o Babel, o JSX é convertido para o JS. Veja abaixo a forma que o Babel faz isso.

React.createElement( "div", { className: "container" },
  React.createElement( "h1",  null, "Olá, estranho! 👋🏼" ),
  React.createElement( "p",  null, "Meu nome é Marcel Scognamiglio – mas pode me chamar de Scog!" ),
),*/

/* Aqui estou passando via props o objeto data que foi criado acima.*/
