const hamburger = document.querySelector('.header__hamburger');
const navigation = document.querySelector('.navigation');
const headerBack = document.querySelector('.header__back');
const headerClose = document.querySelector('.header__close');
const enter = document.querySelector('.header__enter');
const catalogButton = document.querySelector('.navigation__link');
const headerCatalogButton = document.querySelector('.header__link');
const catalog = document.querySelector('.navigation__catalog');
const catalogItems = catalog.querySelectorAll('.navigation__item-link');
const catalogBack = catalog.querySelector('.navigation__header .lost__back');
const catalogClose = catalog.querySelector('.navigation__header .lost__close');

const searchContainer = document.querySelector('.header__search-container');

const categories = document.querySelectorAll('.category');
// const categoryBack = category.querySelector('.lost__back');
// const categoryClose = category.querySelector('.lost__close');

const countriesButton = document.querySelector('.countries__link');
const countriesCatalog = document.querySelector('.countries__catalog');
const countriesClose = countriesCatalog.querySelector('.lost__close');

/* on hamburger click */
const onHamburgerClick = () => {
	navigation.classList.add('navigation--opened');
	hamburger.style.display = 'none';
	headerBack.style.display = 'block';
	enter.style.display = 'none';
	headerClose.style.cssText = 'display: block; position: static; order: 1;';
	searchContainer.style.display = 'none';
};

/* on header back click */
const onHeaderBackClick = () => {
	navigation.classList.remove('navigation--opened');
	headerBack.style.display = 'none';
	hamburger.style.display = 'block';
	headerClose.style.display = 'none';
	enter.style.display = 'block';
	searchContainer.style.display = 'block';
};

/* on header close click */
const onHeaderCloseClick = () => {
	navigation.classList.remove('navigation--opened');
	headerBack.style.display = 'none';
	hamburger.style.display = 'block';
	headerClose.style.display = 'none';
	enter.style.display = 'block';
	searchContainer.style.display = 'block';
};

/* on catalog button click */
const onCatalogButtonClick = () => {
	catalog.classList.add('navigation__catalog--opened');
	headerBack.style.display = 'block';
	console.log('what');
};

/* on header catalog button click */
const onHeaderCatalogButtonClick = () => {
	catalog.classList.add('navigation__catalog--opened');
};

/* on catalog back click */
const onCatalogBackClick = () => {
	catalog.classList.remove('navigation__catalog--opened');
	navigation.classList.remove('navigation--opened');
	headerBack.style.display = 'none';
	hamburger.style.display = 'block';
	headerClose.style.display = 'none';
	enter.style.display = 'block';
};

/* on catalog close click */
const onCatalogCloseClick = () => {
	catalog.classList.remove('navigation__catalog--opened');
	navigation.classList.remove('navigation--opened');
	hamburger.style.display = 'block';
	headerClose.style.display = 'none';
	headerBack.style.display = 'none';
	enter.style.display = 'block';
};

/* catalog item click */

catalog.addEventListener('click', (evt) => {
	evt.preventDefault();

	const itemContainer = evt.target.closest('.navigation__item-container');
	itemContainer?.querySelector('.category').classList.add('category--opened');
});

/* on countries button click */
const onCountriesButtonClick = () => {
	countriesCatalog.classList.add('countries__catalog--opened');
};

/* on countries close click */
const onCountriesCloseClick = () => {
	countriesCatalog.classList.remove('countries__catalog--opened');
	navigation.classList.remove('navigation--opened');
	hamburger.style.display = 'block';
	headerClose.style.display = 'none';
	headerBack.style.display = 'none';
	enter.style.display = 'block';
};

const countriesMain = countriesCatalog.querySelector('.countries__main');

countriesMain.addEventListener('click', (evt) => {
	evt.preventDefault();

	const countriesContainer = evt.target.closest('.countries__container');
	const countriesList = countriesContainer.querySelector('.countries__list');
	countriesList.classList.add('countries__list--opened');
});


hamburger.addEventListener('click', onHamburgerClick);
headerBack.addEventListener('click', onHeaderBackClick);
catalogButton.addEventListener('click', onCatalogButtonClick);
headerCatalogButton.addEventListener('click', onHeaderCatalogButtonClick);
catalogBack.addEventListener('click', onCatalogBackClick);
headerClose.addEventListener('click', onHeaderCloseClick);
catalogClose.addEventListener('click', onCatalogCloseClick);
countriesButton.addEventListener('click', onCountriesButtonClick);
countriesClose.addEventListener('click', onCountriesCloseClick);