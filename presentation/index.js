// Import React
import React, { Component } from 'react';

import {
  Appear,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  Slide,
  Text
} from 'spectacle';
import CodeSlide, { CodeSlideTitle } from 'spectacle-code-slide'

import VictoryPlayground from './victory-playground'
import ShotsDemo from './shots-demo'
import PossessionBarDemo from './poss-demo'
import PlatformDemo from './platform-demo'

import shotsDemoRN from './shots-demo/shots-pie-demo-rn.js'
import data from '../data'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  mls: require('../assets/mls-allwhite-logo.png'),
  mlsBlue: require('../assets/mls-blue-logo.png'),
  react: require('../assets/react.svg'),
  heart: require('../assets/heart.svg'),
  redBulls: require('../assets/red bulls.gif'),
  androidShots: require('../assets/android-shots-2.gif'),
  iosShots: require('../assets/ios-shots.gif'),
  d3: require('../assets/d3.svg'),
  victory: require('../assets/victory-logo.svg'),
  gradientBg: require('../assets/background-gradient.svg'),
  mobileChart: require('../assets/mobile-with-chart.png'),
  laptopChart: require('../assets/laptop-with-chart.png'),
  arrow: require('../assets/arrow-right.svg'),
  soccer: require('../assets/soccer.svg')
};

preloader(images);

const colors = {
  primary: '#05416B',
  secondary: '#FDFEFE',
  tertiary: '#ACD2BF',
  quartenary: '#D5E5E4',
  blue: '#147092'
}

const theme = createTheme(colors, {
  primary: { name: 'Roboto Condensed', googleFont: true, styles: ['400']},
  secondary: 'Helvetica'
});

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgImage={images.gradientBg}>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Cross-Platform
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Data Visualization
          </Heading>
          <Text margin='10px 0 0' fit textColor='quartenary' size={1}>
            Peggy Rayzis · Major League Soccer · @peggyrayzis
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor='primary'>
          <Layout>
            <Fill>
              <Image height={'20vw'} width={'20vw'} style={{margin: '0 auto'}} src={images.mls} />
            </Fill>
            <Fill>
              <Image
                height={'15vw'} width={'15vw'} style={{margin: '3vh 1vw 0 1vw'}} src={images.heart} />
            </Fill>
            <Fill>
              <Image height={'22vw'} width={'22vw'} style={{margin: '0 auto'}} src={images.react} />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor='primary'>
          <Image height={'100%'} width={'100%'} style={{margin: '0 auto'}} src={images.redBulls} />
        </Slide>
        <Slide transition={['fade']} bgColor='primary'>
          <Text textSize='2.5em' lineHeight={1} textColor='secondary'>Users expect to see</Text>
          <Text textSize='2.5em' lineHeight={1} textColor='secondary'>the data they're consuming</Text>
          <Text textSize='2.5em' lineHeight={1} textColor='tertiary'>presented consistently</Text>
          <Text textSize='2.5em' lineHeight={1} textColor='secondary'>on every platform.</Text>
        </Slide>
        <Slide transition={['fade']} bgColor='primary'>
          <Text textSize='4vw' lineHeight={1} textColor='tertiary'>Consistency builds user trust...</Text>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div><Image height={'20vw'} width={'18.5vw'} style={{margin: '0 auto'}} src={images.laptopChart} /></div>
            <div style={{padding: '3vw'}}>
              <Image height={'10vw'} width={'6vw'} style={{margin: '0 auto'}} src={images.arrow} />
            </div>
            <div><Image height={'19vw'} width={'11vw'} style={{margin: '0 auto'}} src={images.mobileChart} /></div>
          </div>
          <Appear><Text textSize='4vw' lineHeight={1} textColor='tertiary'>but is difficult for developers to execute.</Text></Appear>
        </Slide>
        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <ShotsDemo game={data[4]} />
        </Slide>
        <Slide transition={['fade']} bgColor='secondary'>
          <Layout>
            <Fill>
              <Image height={'27vw'} width={'27vw'} style={{margin: '0 auto'}} src={images.d3} />
            </Fill>
            <Fill>
              <Appear><Text textColor='primary' textSize='4.3vw' padding='3vw 0 0 0'>d3-scale</Text></Appear>
              <Appear><Text textColor='primary' textSize='4.3vw' padding='4vw 0 0 0'>d3-shape</Text></Appear>
              <Appear><Text textColor='primary' textSize='4.3vw' padding='4vw 0 0 0'>react-native-svg</Text></Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor='primary'>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <Link href='https://formidable.com/open-source/victory/'>
              <Image height={'10vw'}
                width={'60vw'}
                style={{margin: '0 auto'}}
                src={images.victory}
              />
            </Link>
            <Text padding='2vw 0 0 0' textColor='tertiary'>A modular charting library for React & React Native 😍</Text>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor='primary'>
          <Text textSize='2.5em' lineHeight={1} textColor='secondary'>With Victory,</Text>
          <Text textSize='2.5em' lineHeight={1} textColor='secondary'>our code reuse across</Text>
          <Text textSize='2.5em' lineHeight={1} textColor='secondary'>React & React Native is</Text>
          <Text textSize='2.5em' lineHeight={1} textColor='tertiary'>on average 90-95%.</Text>
        </Slide>
        <Slide transition={['fade']} bgColor='quartenary' textColor='primary'>
          <Heading size={5} style={{paddingBottom: '6vw', margin: '0 auto'}} lineHeight={1} textColor='primary'>
            Composable chart components ✅
          </Heading>
          <VictoryPlayground />
        </Slide>
        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={5} style={{margin: '0 auto', paddingTop: '1.5vh'}} lineHeight={1} textColor='primary'>
            Flexible & interactive ✅
          </Heading>
          <ShotsDemo game={data[4]} />
        </Slide>
        <CodeSlide
          bgColor='#05416B'
          transition={[]}
          lang='js'
          code={shotsDemoRN}
          ranges={[
            { loc: [1, 7],
              title: 'Make your chart cross-platform!',
              note: '1. Import your components from victory-native' },
            { loc: [8, 9],
              title: 'Make your chart cross-platform!',
              note: '2. Swap browser svg with react-native-svg' },
            { loc: [21, 22],
              title: 'Make your chart cross-platform!',
              note: `3. Render your component normally. 🙌🏼 You did it!` },
          ]}
        />
        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}>
            <PlatformDemo platform='iOS' src={images.iosShots} />
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '14vw'
            }}>
              <Text textColor='primary' textSize='5vw'>100%</Text>
              <Text textColor='primary' textSize='2.2vw'>Code Reuse</Text>
              <div
                display='flex'
                flexDirection='row'
                justifyContent='center'>
                <Image
                  height={'6vw'}
                  width={'10vw'}
                  style={{margin: '0 -2.8vw', transform: 'scaleX(-1)'}}
                  src={images.arrow} />
                <Image
                  height={'6vw'}
                  width={'10vw'}
                  style={{margin: '0 -2.8vw'}}
                  src={images.arrow} />
              </div>
            </div>
            <PlatformDemo platform='Android' src={images.androidShots} />
          </div>
        </Slide>
        <Slide maxHeight='100%' maxWidth='100%' style={{ height: '100% '}} transition={['fade']} bgColor='secondary'>
          <div style={{
            display: 'flex',
            flex: 2,
            position: 'relative',
            height: '100%'
          }}>
            <div style={{
              position: 'absolute',
              left: 40,
              top: 40
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Image width='5vw' height='5vw' style={{margin: '0 auto'}} src={images.mlsBlue} />
                <Text textColor='primary' textSize='2.4vw'>Decision Day 2016</Text>
              </div>
              <Text textColor='primary' textSize='2.4vw'>Ball Possession by Half</Text>
            </div>
            <PossessionBarDemo style={{ position: 'absolute', left: '50%'}} data={data} />
            <Text
              textSize='2.2vw'
              style={{
                position: 'absolute',
                right: 40,
                bottom: 40
              }}
              textColor='primary'>@peggyrayzis</Text>
          </div>
        </Slide>
        <Slide transition={['fade']} bgImage={images.gradientBg}>
          <Link href='https://github.com/peggyrayzis/react-conf-data-viz'>
            <Text textSize='5.7vw' textColor='tertiary'>
              Check it out on GitHub!
            </Text>
          </Link>
          <Link href='https://twitter.com/peggyrayzis'>
            <Text textSize='5.7vw' textColor='secondary'>
              @peggyrayzis
            </Text>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
