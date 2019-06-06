import React, { Component, Fragment } from "react";
// import IntroSection from 'components/intro_section';
import ChapterSection from 'components/chapter_section';
// import { PageWrap } from "./styles";


const data = {
  chapterOne: {
    background: '/images/sitting.jpg',
    number: 1,
    title: "Unconscious Bias",
  }, 
  chapterTwo: {
    background: '/images/taxi.jpg',
    number: 2,
    title: "Staying Afloat",
  },
  chapterThree: {
    background: '/images/pool.jpg',
    number: 3,
    title: "Finding a seat",
  }
}


class Home extends Component {
  state = {
    loaded: false
  };

  render() {
      return (
        <Fragment>
        <ChapterSection data={data.chapterOne} />
          {/* <PageWrap loaded={this.state.loaded}>
            <IntroSection />
            <ChapterSection data={data.chapterOne} />
            <ChapterSection data={data.chapterTwo} />
            <ChapterSection data={data.chapterThree}  />
          </PageWrap> */}
        </Fragment>
      );
  }
}

export default Home;
