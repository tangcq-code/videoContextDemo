import { View, Text, Video, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import Taro from '@tarojs/taro'

let context
export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })
  function create() {
    context = Taro.createVideoContext('myVideo')
    console.log('createVideoContext: ' + context)
  }

  function requestFullScreen_0() {
    context.requestFullScreen({
      direction: 0
    })
    console.log('requestFullScreen:0')
  }

  function requestFullScreen_90() {
    context.requestFullScreen({
      direction: 90
    })
    console.log('requestFullScreen:90')
  }

  function exitFullScreen() {
    context.requestFullScreen({
      direction: 0
    })
    setTimeout(() => {
      context.exitFullScreen()
      console.log('exitFullScreen')
    }, 5000)
  }

  function exitBackgroundPlayback() {
    context.exitBackgroundPlayback()
    console.log('exitBackgroundPlayback')
  }

  function exitPictureInPicture() {
    context.exitPictureInPicture()
    console.log('exitPictureInPicture')
  }

  function hideStatusBar() {
    context.hideStatusBar()
    console.log('hideStatusBar')
  }

  function playbackRate() {
    context.playbackRate()
    console.log('playbackRate')
  }

  function requestBackgroundPlayback() {
    context.requestBackgroundPlayback()
    console.log('requestBackgroundPlayback')
  }

  function sendDanmu() {
    context.sendDanmu()
    console.log('sendDanmu')
  }

  function showStatusBar() {
    context.showStatusBar()
    console.log('showStatusBar')
  }


  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Video id='myVideo' src='https://storage.360buyimg.com/jdrd-blog/27.mp3' />
      <Button onClick={create}>createVideoContext</Button>
      <Button onClick={requestFullScreen_0}>requestFullScreen_0</Button>
      <Button onClick={requestFullScreen_90}>requestFullScreen_90</Button>
      <Button onClick={exitFullScreen}>exitFullScreen</Button>
      <Button onClick={exitBackgroundPlayback}>exitBackgroundPlayback</Button>
      <Button onClick={exitPictureInPicture}>exitPictureInPicture</Button>
      <Button onClick={hideStatusBar}>hideStatusBar</Button>
      <Button onClick={playbackRate}>playbackRate</Button>
      <Button onClick={requestBackgroundPlayback}>exitBackgroundPlayback</Button>
      <Button onClick={sendDanmu}>sendDanmu</Button>
      <Button onClick={showStatusBar}>showStatusBar</Button>
    </View>
  )
}
