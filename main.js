const articles = document.querySelectorAll('article');
const aside = document.querySelector('aside');
const closeBtn = document.querySelector('.btnClose');

articles.forEach((article, index)=>{
	article.addEventListener('mouseenter', (e)=>{
		e.currentTarget.querySelector('video').play();
	})

	article.addEventListener('mouseleave', (e)=>{
		e.currentTarget.querySelector('video').pause();
	})

	article.addEventListener('click', (e)=>{

		const tit = e.currentTarget.querySelector('h2').innerText;
		const con = e.currentTarget.querySelector('p').innerText;
		const vidCon = e.currentTarget.querySelector('video').getAttribute('src');

		aside.classList.add('on');

		aside.querySelector('h2').innerText = tit;
		aside.querySelector('p').innerText = con;
		aside.querySelector('video').setAttribute('src', vidCon);
	})

	closeBtn.addEventListener('click', ()=>{
		aside.classList.remove('on');
	})
})


