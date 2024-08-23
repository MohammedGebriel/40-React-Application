import React from 'react';
import { 
    Accordion,
    AxiosCalls,
    AxiosDeleteRequestApi,
    AxiosPostFormData,
    Calculator,
    CascadingDropdown,
    CollapseNavbar,
    Counter,
    CurrencyConverter,
    CustomPagination,
    CustomTab,
    ExpenseTracker,
    FetchDataDynmaic,
    FetchDataWithAxios,
    FoodRecipes,
    FormValidation,
    LightDarkMode,
    ImageSlider,
    LoadMoreButton,
    ModalPopup,
    Packages,
    ProductsFilter,
    QRCodeGenerator,
    RandomColor,
    RatingStar,
    ResizeWindow,
    ScrollIndicator,
    ScrollToSection,
    ScrollToTopAndBottom,
    SearchAutoComplete,
    SearchBarAndSuggestion,
    ShowMore ,
    SimpleCRUD,
    TodoApp,
    TreeView,
    UploadAndDownloadFile,
    UseFetchHook,
    WeatherApp,
    ClickOutside,
} from '../assets/index';
import { MainCard } from '../components';
export default function Home() {
    return (
        <div className='p-[20px]'>
            {/* <h1 className='mb-[20px] text-[20px] lg:text-[28px] font-bold text-center'>These Projects To Improve My Level In Programming Logic In React</h1> */}
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
                <MainCard img={ProductsFilter} title='Products App' link='/products'/>
                <MainCard img={ExpenseTracker} title='Expense Tracker' link='/expense-tracker'/>
                <MainCard img={WeatherApp} title='Weather App' link='/weather-app'/>
                <MainCard img={FoodRecipes} title='Food Recipes' link='/food-recipes'/>
                <MainCard img={CustomPagination} title='Custom Pagination' link='/custom-pagination'/>
                <MainCard img={Calculator} title='Calculator' link='/calculator'/>
                <MainCard img={SimpleCRUD} title='Simple CRUD' link='/simple-crud'/>
                <MainCard img={FormValidation} title='Form Validation' link='/form-validation'/>
                <MainCard img={TodoApp} title='Todo App' link='/todo-app'/>
                <MainCard img={CascadingDropdown} title='Cascading Dropdown' link='/cascading-dropdown'/>
                <MainCard img={Accordion} title='Accordion' link='/accordion'/>
                <MainCard img={RandomColor} title='Random Color' link='/random-color'/>
                <MainCard img={CurrencyConverter} title='Currency Converter' link='/currency-converter'/>
                <MainCard img={RatingStar} title='Rating Star' link='/rating-star'/>
                <MainCard img={ImageSlider} title='Image Slider' link='/image-slider'/>
                <MainCard img={QRCodeGenerator} title='QR Code Generator' link='/qr-code-generator'/>
                <MainCard img={ScrollIndicator} title='Scroll Indicator' link='/scroll-indicator'/>
                <MainCard img={LoadMoreButton} title='Load More Button' link='/load-more-button'/>
                <MainCard img={CustomTab} title='Custom Tab' link='/custom-tab'/>
                <MainCard img={ModalPopup} title='Modal Popup' link='/modal-popup'/>
                <MainCard img={UseFetchHook} title='Use Fetch Hook' link='/use-fetch-hook'/>
                <MainCard img={ScrollToTopAndBottom} title='Scroll To Top' link='/scroll-to-top-and-bottom'/>
                <MainCard img={ScrollToSection} title='Scroll To Section' link='/scroll-to-section'/>
                <MainCard img={ResizeWindow} title='Resize Window' link='/resize-window'/>
                <MainCard img={ClickOutside} title='Click OutSide' link='/click-outside'/>
                <MainCard img={LightDarkMode} title='Light Dark Modes' link='/light-dark-mode'/>
                <MainCard img={SearchAutoComplete} title='Search Auto Complete' link='/search-auto-complete'/>
                <MainCard img={TreeView} title='Tree View' link='/tree-view'/>
                <MainCard img={ShowMore} title='Show More' link='/show-more  '/>
                <MainCard img={SearchBarAndSuggestion} title='Search Bar' link='/search-bar'/>
                <MainCard img={Counter} title='Counter' link='/counter'/>
                <MainCard img={CollapseNavbar} title='Collapse Navbar' link='/collapse-navbar'/>
                <MainCard img={UploadAndDownloadFile} title='Download File' link='/upload-and-download-file'/>
                <MainCard img={Packages} title='Packages' link='/packages'/>
                <MainCard img={FetchDataWithAxios} title='FetchData With Axios' link='/fetch-data-with-axios'/>
                <MainCard img={AxiosCalls} title='Axios Calls' link='/axios-calls'/>
                <MainCard img={AxiosDeleteRequestApi} title='Axios Delete Request' link='/axios-delete-request-api'/>
                <MainCard img={AxiosPostFormData} title='Axios Post Data' link='/axios-post-form-data'/>
                <MainCard img={FetchDataDynmaic} title='Fetch Data Dynamic' link='/fetch-data-dynamic'/>
                {/* <MainCard img={Accordion} title='Accordion' link='/accordion'/>
                <MainCard img={Accordion} title='Accordion' link='/accordion'/>
                <MainCard img={Accordion} title='Accordion' link='/accordion'/>
                <MainCard img={Accordion} title='Accordion' link='/accordion'/> */}


            </div>
        </div>
    );
}
