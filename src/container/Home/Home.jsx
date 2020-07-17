import React, { Component } from "react";
// import YouTubeComp from "../../components/YoutubeComp/YouTubeComp";
import Product from "../Product/Product";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <p>Youtube Konoha</p>
        <hr />
        <YouTubeComp
          img="https://cdn.idntimes.com/content-images/duniaku/post/20200713/naruto-uzumaki-confident-9573fbb860fe0680d6c7bf907a1d5edb_600x400.jpg"
          time="10.34"
          title="Naruto Uzumaki"
          desc="200x ditonton, 2 hari yang lalu"
        />
        <YouTubeComp
          img="https://ggwp.id/media/wp-content/uploads/2020/02/sasuke-naruto.jpg"
          time="08.38"
          title="Uciha Sasuke"
          desc="20x ditonton, 1 hari yang lalu"
        />
        <YouTubeComp
          img="https://i.pinimg.com/564x/69/a5/22/69a5223a0802d9a5375cc1fe7f907ff0.jpg"
          time="18.04"
          title="Garra"
          desc="132x ditonton, 7 hari yang lalu"
        />
        <YouTubeComp
          img="https://i.pinimg.com/564x/70/4c/1d/704c1d6ce6e9e2607421220477ed600a.jpg"
        /> */}
        <p>Counter</p>
        <hr />
        <Product />
      </div>
    );
  }
}

export default Home;
