class PlayerController {
  constructor(ngAudio) {
    'ngInject';
    var vm = this;
    this.name = 'player';

    this.isPlaying = false;
    this.currentSound = ngAudio.load('http://volumens.com/proyectos/playlist/sexy-socialite.mp3')

    this.playSound = function(){
      if(!vm.isPlaying){
        console.log('Play Sound')
        vm.isPlaying = true;
        vm.currentSound.play();
      }else{
        console.log('Stop Sound')
        vm.isPlaying = false;
        vm.currentSound.stop()
      }
      
    }

    this.playlist = [
      {
        name: 'Chromeo',
        mp3: 'http://volumens.com/proyectos/playlist/sexy-socialite.mp3',
      },
      {
        name: 'Chromeo',
        mp3: 'http://volumens.com/proyectos/playlist/sexy-socialite.mp3',
      }
    ];

    this.volumenSlider = 10;
    this.sliderOptions = {
      min: 0,
      max: 180,
    }
  }
}

export default PlayerController;
