
       let wavesurfer = WaveSurfer.create({
       container: '#waveform',
       waveColor: 'violet',
       progressColor: 'purple',
       barWidth: 1,
       height: 30,
       responsive: true,
            });


    function tocarMusica(musica,titulo) {
       wavesurfer.load(musica);
       document.getElementById('titulo-musica').innerText = titulo;//onde se le o nome da musica
       wavesurfer.play();
   }//////////////////////////////////////////////
  
    ///////////////////////////////////////////////////

   function playPause() {
       if (wavesurfer.isPlaying()) {
           wavesurfer.pause();
           document.getElementById('play-pause').innerText = 'Play';
       } else {
           wavesurfer.play();
           document.getElementById('play-pause').innerText = 'Pause';
       }
   }

   function ajustarVolume(valor) {
       wavesurfer.setVolume(valor / 100); // Ajusta o volume entre 0 e 1
   }

   wavesurfer.on('ready', function () {
       const downloadLink = document.getElementById('download-link');
       downloadLink.href = wavesurfer.getCurrentAudio().src;
       downloadLink.style.display = 'inline'; // Exibe o link de download
   });


        
