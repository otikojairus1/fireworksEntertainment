$(function() {
    "use strict";
    if ($('.audio-player').length) {
		var myPlayListOtion = '<ul class="more_option"><li><a href="#"><span class="opt_icon" title="Add To Favourites"><span class="icon icon_fav"></span></span></a></li><li><a href="#"><span class="opt_icon" title="Add To Queue"><span class="icon icon_queue"></span></span></a></li><li><a href="#"><span class="opt_icon" title="Download Now"><span class="icon icon_dwn"></span></span></a></li><li><a href="#"><span class="opt_icon" title="Add To Playlist"><span class="icon icon_playlst"></span></span></a></li><li><a href="#"><span class="opt_icon" title="Share"><span class="icon icon_share"></span></span></a></li></ul>';
		
        var myPlaylist = new jPlayerPlaylist({
            jPlayer: "#jquery_jplayer_1",
            cssSelectorAncestor: "#jp_container_1"
        }, [{
			image : 'images/weekly/song1.jpg',	
            title: "HIP HOP",
            artist: "DJ FIREWORKS",
            mp3: "https://preview.hearthis.at/files/5d8c3c02c936fd0a39753949c3aba0df.mp3",
            oga: "https://hearthis.app/deejayfire-works/hiphop-mixx/stream.mp3?s=Krb&t=1626809901",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song2.jpg',	
            title: "MEDDY MIXTAPE",
            artist: "FireWorks",
            mp3: "https://hearthis.app/deejayfire-works/medly-mixtape-request/stream.mp3?s=eTo&t=1626810350",
            oga: "https://hearthis.app/deejayfire-works/medly-mixtape-request/stream.mp3?s=eTo&t=1626810350",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song3.jpg',	
            title: "GENGE PREVIEW",
            artist: "FireWorks Gengetone",
            mp3: "https://preview.hearthis.at/files/5d8c3c02c936fd0a39753949c3aba0df.mp3",
            oga: "https://preview.hearthis.at/files/5d8c3c02c936fd0a39753949c3aba0df.mp3",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song4.jpg',	
            title: "Tempered Song",
            artist: "Shelter",
            mp3: "https://preview.hearthis.at/files/5d8c3c02c936fd0a39753949c3aba0df.mp3",
            oga: "https://preview.hearthis.at/files/5d8c3c02c936fd0a39753949c3aba0df.mp3",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song5.jpg',	
            title: "Hidden",
            artist: "Bad Religion",
            mp3: "https://preview.hearthis.at/files/5d8c3c02c936fd0a39753949c3aba0df.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song6.jpg',	
            title: "Lentement",
            artist: "Apollo 440",
            mp3: "https://preview.hearthis.at/files/5d8c3c02c936fd0a39753949c3aba0df.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song7.jpg',	
            title: "Lismore",
            artist: "Bloodhound Gang",
            mp3: "https://preview.hearthis.at/files/5d8c3c02c936fd0a39753949c3aba0df.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song8.jpg',	
            title: "The Separation",
            artist: "Friendly Fires ",
            mp3: "https://preview.hearthis.at/files/5d8c3c02c936fd0a39753949c3aba0df.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song9.jpg',	
            title: "Beside Me",
            artist: "Friendly Fires ",
            mp3: "https://preview.hearthis.at/files/5d8c3c02c936fd0a39753949c3aba0df.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-06-Beside-me.ogg",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song2.jpg',	
            title: "Bubble",
            artist: "Skunkhour",
            mp3: "https://preview.hearthis.at/files/5d8c3c02c936fd0a39753949c3aba0df.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song2.jpg',	
            title: "Stirring of a fool",
            artist: "The Meanies",
            mp3: "https://preview.hearthis.at/files/5d8c3c02c936fd0a39753949c3aba0df.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song2.jpg',	
            title: "Partir",
            artist: "The Living End",
            mp3: "https://preview.hearthis.at/files/5d8c3c02c936fd0a39753949c3aba0df.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song2.jpg',	
            title: "Thin Ice",
            artist: "Screaming Trees",
            mp3: "https://preview.hearthis.at/files/5d8c3c02c936fd0a39753949c3aba0df.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-10-Thin-ice.ogg",
			option : myPlayListOtion
			
        }], {
            swfPath: "js/plugins",
            supplied: "oga, mp3",
            wmode: "window",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            playlistOptions: {
                autoPlay: false
            }
        });
        $("#jquery_jplayer_1").on($.jPlayer.event.ready + ' ' + $.jPlayer.event.play, function(event) {
            var current = myPlaylist.current;
            var playlist = myPlaylist.playlist;
            $.each(playlist, function(index, obj) {
                if (index == current) {
                    $(".jp-now-playing").html("<div class='jp-track-name'><span class='que_img'><img src='"+obj.image+"'></span><div class='que_data'>" + obj.title + " <div class='jp-artist-name'>" + obj.artist + "</div></div></div>");
                }
            });
			$('.knob-wrapper').mousedown(function() {
                $(window).mousemove(function(e) {
                    var angle1 = getRotationDegrees($('.knob')),
					volume = angle1 / 270 					
					
                    if (volume > 1) {
                        $("#jquery_jplayer_1").jPlayer("volume", 1);
                    } else if (volume <= 0) {
                        $("#jquery_jplayer_1").jPlayer("mute");
                    } else {
                        $("#jquery_jplayer_1").jPlayer("volume", volume);
                        $("#jquery_jplayer_1").jPlayer("unmute");
                    }
                });
				
                return false;
            }).mouseup(function() {
                $(window).unbind("mousemove");
            });
			
			
			function getRotationDegrees(obj) {
				var matrix = obj.css("-webkit-transform") ||
				obj.css("-moz-transform")    ||
				obj.css("-ms-transform")     ||
				obj.css("-o-transform")      ||
				obj.css("transform");
				if(matrix !== 'none') {
					var values = matrix.split('(')[1].split(')')[0].split(',');
					var a = values[0];
					var b = values[1];
					var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
				} else { var angle = 0; }
				return (angle < 0) ? angle + 360 : angle;
			}

			
			
			
			
            var timeDrag = false;
            $('.jp-play-bar').mousedown(function(e) {
                timeDrag = true;
                updatebar(e.pageX);
				
            });
            $(document).mouseup(function(e) {
                if (timeDrag) {
                    timeDrag = false;
                    updatebar(e.pageX);
                }
            });
            $(document).mousemove(function(e) {
                if (timeDrag) {
                    updatebar(e.pageX);
                }
            });
            var updatebar = function(x) {
                var progress = $('.jp-progress');
                var position = x - progress.offset().left;
                var percentage = 100 * position / progress.width();
                if (percentage > 100) {
                    percentage = 100;
                }
                if (percentage < 0) {
                    percentage = 0;
                }
                $("#jquery_jplayer_1").jPlayer("playHead", percentage);
                $('.jp-play-bar').css('width', percentage + '%');
            };
            $('#playlist-toggle, #playlist-text, #playlist-wrap li a').unbind().on('click', function() {
                $('#playlist-wrap').fadeToggle();
                $('#playlist-toggle, #playlist-text').toggleClass('playlist-is-visible');
            });
            $('.hide_player').unbind().on('click', function() {
                $('.audio-player').toggleClass('is_hidden');
                $(this).html($(this).html() == '<i class="fa fa-angle-down"></i> HIDE' ? '<i class="fa fa-angle-up"></i> SHOW PLAYER' : '<i class="fa fa-angle-down"></i> HIDE');
            });
            $('body').unbind().on('click', '.audio-play-btn', function() {
                $('.audio-play-btn').removeClass('is_playing');
                $(this).addClass('is_playing');
                var playlistId = $(this).data('playlist-id');
                myPlaylist.play(playlistId);
            });
			
        });
    }
});