function olah(nomorWa, teks){
	teks = teks.split("\n").map(x => x.trimStart()).join("\n")
	teks = encodeURIComponent(teks)
	return `https://api.whatsapp.com/send?phone=${nomorWa}&text=${teks}`
}

module.exports = olah
