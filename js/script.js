import BannerHome from "./modules/bannerHome.js";
import CardsHome from "./modules/cardsHome.js";
import Guarantee from "./modules/guarantee.js";
import Menu from "./modules/menu.js";
import NumbersMobile from "./modules/numbersMobile.js";
import CardsSolutions from "./modules/cardsSolutions.js";
import FormContact from "./modules/formContact.js";
import OpenSolutions from "./modules/openSolutions.js";
import SlideBenefits from "./modules/slideBenefits.js";
import Adivisors from "./modules/adivisors.js";
import SlideAbout from "./modules/slideAbout.js";

const bannerHome = new BannerHome();
const cardsHome = new CardsHome();
const guarantee = new Guarantee();
const numbersMobile = new NumbersMobile();
const menu = new Menu();
const cardsSolutions = new CardsSolutions();
const openSolutions = new OpenSolutions();
const slideBenefits = new SlideBenefits();
const slideAbout = new SlideAbout();
const formContact = new FormContact();
const adivisors = new Adivisors();
adivisors.renderAdvisors();

