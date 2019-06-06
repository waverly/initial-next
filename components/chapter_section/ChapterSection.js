import React, { Component, Fragment } from "react";
// import Carousel from 'components/carousel';
// import { Background, SectionWrap, TextBlock } from './styles'
// import { AppContext } from "utils/helpers";

class ChapterSection extends Component {

  state = {
    translate: 0,
    numBlocks: 6
  }

  carouselWidth;

  componentDidMount() {
    // TODO: pull in variable from theme of carousel width
    this.carouselWidth = 70 * this.state.numBlocks + 30
  }

  onClick = (nativeEvent, width) => {

    const { x } = nativeEvent
    const direction = x < (width / 2) ? "prev" : "next"

    if (Math.abs(this.state.translate) < (this.carouselWidth - 30) && direction === "next") {
      this.setState({ translate: this.state.translate - 70 })
    } else if (Math.abs(this.state.translate) > 0 && direction === "prev") {
      this.setState({ translate: this.state.translate + 70 })
    }
  }

  render() {

    const { data } = this.props;

    if (data) {
      return (
        <h1>i am a chapter section</h1>
        // <AppContext.Consumer>
        //   {({ width }) => (

        //     <SectionWrap onClick={e => this.onClick(e.nativeEvent, width)} first={data.number === 1} translate={this.state.translate}>
        //       <Carousel numBlocks={this.state.numBlocks} translate={this.state.translate} />
        //       <TextBlock shouldDisplay={this.state.translate === 0}>
        //         <p className="button">Chapter {data.number}.</p>
        //         <h1>{data.title}</h1>
        //       </TextBlock>
        //       <Background background={data.background} shouldDisplay={this.state.translate === 0} />
        //     </SectionWrap>
        //   )}
        // </AppContext.Consumer>
      );
    } else {
      return null;
    }
  }
}

export default ChapterSection;
