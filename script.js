$(document).ready(function() {

	const div = document.querySelector('#container')
	const audio = document.querySelector('#audio')
	const versets = document.querySelector('#versets')
	const number = document.querySelector('#number')
	$('#loading').show()

	fetch('http://api.alquran.cloud/v1/quran/ar.alafasy')
		.then(res => {
			if (res.ok) {
				$("#loading").hide()
				$("#connexion").hide()
				res.json().then(data => {
					console.log(data);
					for (let i = 0; i < data.data.surahs.length; i++) {

						const surahTitle = data.data.surahs[i].name
						const surahNumber = data.data.surahs[i].number
						const versetNumber = data.data.surahs[i].ayahs.length
						const surahFrenchName = data.data.surahs[i].englishName
						const revelations = data.data.surahs[i].revelationType
						let revelation = ''
						if (revelations === 'Meccan') {
							revelation = 'Mecquoise'
						} else {
							revelation = 'Medinoise'
						}

						div.innerHTML +=
							`
              <div class="content">
                  <h3 class="number">${surahNumber}</h3>
                <div class="title">
                  <h2>${surahTitle} ${surahFrenchName}</h2>
                  <p class="verset">Versets: ${versetNumber}</p>
                  <p class="revelation"> ${revelation}</p>

                </div>
                 
              </div>
         		`
					}
					let divChildren = $('#container')
					divChildren.click(function(e) {
						if (e.target.textContent <= 114 && e.target.textContent >= 1) {
							cibleSurah = e.target.textContent
						} else {
							cibleSurah = null
						}
						fetch(`http://api.alquran.cloud/v1/surah/${cibleSurah}/ar.alafasy`)
							.then(reponse => {
								if (reponse.ok) {
									reponse.json().then(data => {
										console.log(data);
										var tableauNumber = []
										var tableausurate = []
										var tableauverset = []
										versets.textContent = data.data.ayahs[0].text
										number.textContent = data.data.ayahs[0].numberInSurah

										for (let i = 0; i < data.data.ayahs.length; i++) {
											tableauverset.push(data.data.ayahs[i].text)
											tableausurate.push(data.data.ayahs[i].audio)
											tableauNumber.push(data.data.ayahs[i].numberInSurah)
										}
										$('#audio').attr("src", data.data.ayahs[0].audio)
										let AyahIndex = 0
										let parole = 0
										let numberVerset = 0
										audio.addEventListener('ended', () => {
											AyahIndex++;
											parole++
											numberVerset++
											if (AyahIndex < data.data.ayahs.length) {
												audio.src = tableausurate[AyahIndex]
											}
											versets.textContent = tableauverset[parole]
											number.textContent = tableauNumber[numberVerset]
										})
									})
								}
							})
					})
				})
			} else {
				$('#loading').show()
				$("#connexion").show()
			}
		})
}).catch(err => {
	$("#connexion").show()
})