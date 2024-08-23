import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { Accordion, AxiosCalls, AxiosDeleteRequestApi, AxiosPostFormData, Calculator, CascadingDropdown, ClickOutside, CollapseNavbar, ContainerPackages, Counter, CurrencyConverter, CustomPagination, ExpenseTracker, FetchDataDynamic, FetchDataWithAxios, FilterComponent, FoodRecipes, FormValidation, ImageSlider, LightDarkMode, LoadMoreButton, ModalPopup, QRCodeGenerator, RandomColor, RatingStar, ResizeWindow, ScrollIndicator, ScrollToSection, ScrollToTopAndBottom, SearchAutocomplete, SearchBar, ShowMoreCheck, SimpleCRUD, Tab, TodoApp, TreeView, UploadAndDownloadFile, UseFetchHookTest, WeatherApp } from './components';
import FavoriteRecipes from './components/food-recipes/FavoriteRecipes';
import DetailsRecipes from './components/food-recipes/DetailsRecipes';
import ProductDetails from './components/filter-component/ProductDetails';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/accordion'  element={<Accordion />} />
        <Route path='/random-color'  element={<RandomColor />} />
        <Route path='/rating-star'  element={<RatingStar />} />
        <Route path='/image-slider'  element={<ImageSlider url='https://picsum.photos/v2/list?page=1&limit=10' />} />
        <Route path='/qr-code-generator'  element={<QRCodeGenerator />} />
        <Route path='/scroll-indicator'  element={<ScrollIndicator />} />
        <Route path='/load-more-button'  element={<LoadMoreButton />} />
        <Route path='/custom-tab'  element={<Tab />} />
        <Route path='/modal-popup'  element={<ModalPopup />} />
        <Route path='/use-fetch-hook'  element={<UseFetchHookTest />} />
        <Route path='/scroll-to-top-and-bottom'  element={<ScrollToTopAndBottom />} />
        <Route path='/scroll-to-section'  element={<ScrollToSection />} />
        <Route path='/food-recipes'  element={<FoodRecipes />} >
          <Route path='favorites' element={<FavoriteRecipes />} />
          <Route path='recipes-item/:id' element={<DetailsRecipes />} />
        </Route>


        <Route path='/resize-window'  element={<ResizeWindow />} />
        <Route path='/click-outside'  element={<ClickOutside />} />
        <Route path='/light-dark-mode'  element={<LightDarkMode />} />
        <Route path='/search-auto-complete'  element={<SearchAutocomplete />} />
        <Route path='/weather-app'  element={<WeatherApp />} />
        <Route path='/expense-tracker'  element={<ExpenseTracker />} />
        <Route path='/tree-view'  element={<TreeView />} />
        <Route path='/show-more'  element={<ShowMoreCheck />} />
        <Route path='/simple-crud'  element={<SimpleCRUD />} />
        <Route path='/form-validation'  element={<FormValidation />} />
        <Route path='/todo-app'  element={<TodoApp />} />
        <Route path='/products'  element={<FilterComponent />} />
          <Route path='/products/:id'  element={<ProductDetails />} />
        <Route path='/search-bar'  element={<SearchBar />} />
        <Route path='/cascading-dropdown'  element={<CascadingDropdown />} />
        <Route path='/calculator'  element={<Calculator />} />
        <Route path='/counter'  element={<Counter />} />
        <Route path='/custom-pagination'  element={<CustomPagination />} />
        <Route path='/currency-converter'  element={<CurrencyConverter />} />
        <Route path='/collapse-navbar'  element={<CollapseNavbar />} />
        <Route path='/upload-and-download-file'  element={<UploadAndDownloadFile />} />
        <Route path='/packages'  element={<ContainerPackages />} />
        <Route path='/fetch-data-with-axios'  element={<FetchDataWithAxios />} />
        <Route path='/axios-calls'  element={<AxiosCalls />} />
        <Route path='/axios-delete-request-api'  element={<AxiosDeleteRequestApi />} />
        <Route path='/axios-post-form-data'  element={<AxiosPostFormData />} />
        <Route path='/fetch-data-dynamic'  element={<FetchDataDynamic />} />
        {/* <Route path='/'  element={<Home />} /> */}
        {/* <Route path='/'  element={<Home />} /> */}

      </Routes>


      {/* Free Code Camp  Tutorial /////////////////////////////////////////////////*/}


      {/* Accordion Component  */}
      {/* <Accordion /> */}

      {/* Random Color Component  */}
      {/* <RandomColor /> */}

      {/* Rating Star Component  */}
      {/* <RatingStar /> */}

      {/* ImageSliderComponent  */}
      {/* <ImageSlider url='https://picsum.photos/v2/list?page=1&limit=10'/> */}

      {/* QR Code Generator Component */}
      {/* <QRCodeGenerator /> */}

      {/* Load More Button Component  */}
      {/* <LoadMoreButton /> */}

      {/* Scroll Indicator Component  */}
      {/* <ScrollIndicator /> */}

      {/* Custom Tab Component  */}
      {/* <Tab /> */}

      {/* Modal Popup Component  */}
      {/* <ModalPopup /> */}

      {/* Github Profile Finder Component  */}
      {/* <GithubProfileFinder /> */}

      {/* Use Fetch Hook Test  */}
      {/* <UseFetchHookTest /> */}

      {/* Scroll To Top And Bottom  */}
      {/* <ScrollToTopAndBottom /> */}

      {/* Scroll to Particular Section  */}
      {/* <ScrollToSection /> */}

      {/* Food Recipes Component  */}
      {/* <FoodRecipes /> */}

      {/* Resize Window Component */}
      {/* <ResizeWindow /> */}
      {/* <Test /> */}

      {/* Click OutSide Component  */}
      {/* <ClickOutside /> */}


      {/* Light And Dark Mode  */}
      {/* <LightDarkMode /> */}

      {/* Search Auto Complete Component  */}
      {/* <SearchAutocomplete /> */}


      {/* Weather App Component  */}
      {/* <WeatherApp /> */}

      {/* Expanse Tracker App  */}
      {/* <ExpenseTracker /> */}

      {/* Tree View Component  */}
      {/* <TreeView /> */}

      {/* ShowMoreCheck Component  */}
      {/* <ShowMoreCheck /> */}

  {/* Problem Solving Tutorial  /////////////////////////////////////////////////////////////////// */}
      
      {/* CRUD Operation Component  */}  {/* Done */}
      {/* <SimpleCRUD /> */}
      
      {/* Form validation Component  */}
      {/* <FormValidation /> */}

      {/* Todo App Component  */}
      {/* <TodoApp /> */}

      {/* Filter Component  */}
      {/* <FilterComponent /> */}

      {/* SearchBar And Suggestion Component  */}
      {/* <SearchBar />  */}

      {/* Cascading Dropdown Component  */}
      {/* <CascadingDropdown /> */}

      {/* Calculator App Component  */}  {/* Done */}
      {/* <Calculator />  */}

      {/* Counter App  */}  {/* Done */}
      {/* <Counter /> */}

      {/* Custom Pagination  */}
      {/* <CustomPagination /> */}

      {/* Currency Converter Component */}
      {/* <CurrencyConverter /> */}

      {/* CollapseNavbar Component */}
      {/* <CollapseNavbar /> */}

      {/* UploadAndDownloadFile Component  */}
      {/* <UploadAndDownloadFile /> */}


      {/* Testing Component  */}
      {/* <Testing /> */}





 
      {/* Deal With API ///////////////////////////////////////////////////////////////////// */}

      {/* Fetch /////////////////////////////////////////// */}

      {/* JsonServer Component  */}
      {/* <JsonServer /> */}

      {/* Fetch Data Dynamic Component  */}
      {/* <FetchDataDynamic /> */}

      {/* Read Local Json  */}
      {/* <ReadLocalJson /> */}

      {/* Fetch Json Data Component  */}
      {/* <FetchNestedjsonData/> */}

      {/* Modern Fetch Component  */}
      {/* <ModernFetch /> */}

      {/* Axios ///////////////////////////////////////////////// */}

      {/* Axios Calls Component  */}
      {/* <AxiosCalls /> */}

      {/* Fetch Data With Axios Component  */}
      {/* <FetchDataWithAxios /> */}

      {/* AxiosPostFormData Component  */}
      {/* <AxiosPostFormData /> */}

      {/* Axios Delete Request Api Component  */}
      {/* <AxiosDeleteRequestApi /> */}



      {/* Packages  ///////////////////////////////////////////////////////////////////////// */} 
      {/* <ContainerPackages /> */}



    </div>
  );
}
