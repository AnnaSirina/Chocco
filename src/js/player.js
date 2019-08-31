let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    width: "660",
    height: "405",
    videoId: "WmLMOMwlmtI",
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerReady() {
  const durationInSeconds = player.getDuration();
  let interval;
  clearInterval(interval);
  interval = (setInterval(() => {
      const completedInSeconds = player.getCurrentTime();
      $('.player__duration-completed').text(formatTime(completedInSeconds));
    }, 1000);

    $(".player__duration-estimate").text(formatTime(durationInSeconds));
  }

  function formatTime(time) {
    const roundTime = Math.round(time);
    const minutes = Math.floor(roundTime / 60);
    const seconds = roundTime - minutes * 60;
    const fornattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${fornattedSeconds}`;
  }

  $('.player__start').on('click', e => {
    const btn = $(e.currentTarget);

    if (btn.hasClass("paused")) {
      player.pauseVideo();
      btn.removeClass("paused")
    } else {
      player.playVideo();
      btn.addClass("paused");
    }

  })

  function onPlayerStateChange(event) {
    const playerButton = $(".player__start");
    switch (event.data) {
      case 1:
        $(".player__wrapper").addClass("active");
        playerButton.addClass("paused");
        break;
      case 2:
        playerButton.removeClass("paused");
        break;
    }
  }

  $(".player__splash").on("click", e => {
    player.playVideo();
  });

  function changeButtonPosition(percents) {
    $(".player__playback-button").css({
      left: `${percents}%`
    });
  }

  function updateTimerDisplay() {
    $(".player__duration-completed").text(formatTime(player.getCurrentTime()));
    $(".player__duration-estimate").text(formatTime(player.getDuration()));
  }