# RelaX50
This is my final project for [Harvard's CS50x (2021)](https://cs50.harvard.edu/x/2021/) webcourse.<br>
Demo video: [click here.](https://youtu.be/gIxg56wShw8)

<br>

## 1. Overview
**RelaX50** is a simple and beautiful Chrome extension that plays a collection of relaxing music based on user's choice. It stimulates a minimalistic radio station that can help study 🧑‍🎓, meditate 💆, relax 😌, and sleep 😴.

<br>

## 2. Structure
<br>

```
  ├ audios                         => the audio files used in each track (6)
  | ├ ambient.mp3
  | ├ cosmo.mp3
  | ├ lofi.mp3
  | ├ lofi2.mp3
  | ├ rain.mp3
  | └ sea.mp3
  ├ images
  | ├ ambient.jpg                  => the cover photo for each song (6)
  | ├ cosmo.jpg
  | ├ lofi.jpg
  | ├ lofi2.jpg
  | ├ rain.jpg
  | ├ sea.jpg
  | ├ get_started16.png            => the extension icon, in different sizes (4)
  | ├ get_started32.png
  | ├ get_started48.png
  | ├ get_started128.png
  | └ logo.jpg                     => the logo displayed in the HTML file (1)
  ├ background.js
  ├ bootstrap.js
  ├ bootstrap.css
  ├ bootstrap.css.map
  ├ jquery-3.6.0.min.js
  ├ manifest.json
  ├ popup.css
  ├ popup.html
  └ popup.js
```
  
<br>

## 3. Usage
#### UPLOADING THE PACKAGE
1. Open Google Chrome and enter chrome://extensions/.
2. Upload the RelaX50 files through "Load Unpacked" (developer mode).
3. Locate the extension in the "No Access Needed" section by clicking on the puzzle icon in the top bar.
4. Pin the extension by dragging it into the top bar.
#### NAVIGATING THE PAGE 
1. Scroll through the page to view the soundtracks, separated into "Nature", "Lo-Fi", and "Ambient" categories.
2. Click on any of the play buttons to start playing the respective track.
3. To pause the audio, simply click the button again.
4. To control the audio playback, toggle the seek slider.
5. Click off the page to kill the program. 
#### INSPECT ELEMENTS
1. To inspect the Popup actions, right click the icon and select "Inspect Popup".
2. To view extension information, right click the icon and select "Manage Extensions".

<br/>

## 4. Attributions
#### 🖼️ &nbsp;IMAGES
- **Icon & logo** created on [Procreate](https://procreate.art/)
- **Song cover photos** downloaded from [Unsplash](https://unsplash.com/)


#### 🎵&nbsp;AUDIOS
- **ambient.mp3:** https://snapmuse.com/
- **cosmo.mp3:** https://enlightenedaudio.com/
- **lofi.mp3:** A Warm Breeze Runs Through My Face by Electronic Senses | https://soundcloud.com/electronicsenses
Music promoted by https://www.free-stock-music.com
Creative Commons Attribution-ShareAlike 3.0 Unported
https://creativecommons.org/licenses/by-sa/3.0/deed.en_US
- **lofi2.mp3:** Lucid Dreaming by | e s c p | https://escp-music.bandcamp.com
Music promoted by https://www.free-stock-music.com
Attribution 4.0 International (CC BY 4.0)
https://creativecommons.org/licenses/by/4.0/
- **rain.mp3:** https://storyblocks.com/
- **sea.mp3:** https://storyblocks.com/

