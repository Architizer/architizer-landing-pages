# Architizer Landing Pages
Documentation for designing and building Architizer landing pages.

## Design Process
With the process outlined below, the product team will be able to take full control over the design and implementation of Architizer’s landing pages while placing the absolute minimum strain on engineering resources by using a tool called [Webflow](https://webflow.com/dashboard). Webflow is a graphical interface for building and versioning websites that enables designers to build and publish their designs themselves. There is a 1:1 relationship between the interface and the code itself, meaning that you are adding divs and adding CSS classes to manipulate, so both designers and developers can understand exactly what is going on and can work with each other to get the job done.

## Building a Landing Page
#### 1. Login to [Webflow](https://webflow.com/dashboard) (credentials on Meldium). 
#### 2. Open the “Source Landing Pages” project
All landing pages will be built within this single project. This is very important because when we publish the pages we are proxying from this projects staging server (source-landing-pages.webflow.io) to our own URL structure, outline below)
    
#### 3. Start a new page (notice the page structure on the left [INSERT IMAGE])

##### Option 1 - Copy an existing page and edit its settings (name, slug, etc…)
  1. The easiest way to start a new page is to copy one of the completed pages and change the copy/styling as needed. For consistency’s sake, all landing pages should follow the same basic design/style template, so copy an existing page in order to not deviate too much. 
  2. Build your page to your design spec
    * When copying a page, absolutely make sure not to change any CSS styles without adding a new subclass, otherwise all pages, including the one that the new page has been copied from, will change.
    
##### Option 2 - Create a new blank page
  1. Start from a blank page and manually create your HTML/CSS elements, or copy/paste elements from built pages to construct your new page
    * This is the best method if you have designed a page that differs from the existing landing pages
      
#### 4. Add forms

Create a form element with fields that mirror those built in the Eloqua form

1. **In Eloqua** create and route the form
    
  1. Go to Forms and click “Integrate an External Form    
  2. Enter the URL where this landing page will be published (see URL Structures) and follow the instructions
2. **In Webflow** add the appropriate hidden fields and POST address
 
  1. In the field’s settings add the POST address [IMAGE]
  2. Create an HTML embed with the hidden fields that have been copied/pasted from Eloqua [IMAGE]

#### 5. Triple check styles across all pages to make sure style changes have not been made to other pages
#### 6. Publish the page
1. On the top right of Webflow, press the “publish” button to publish it to the webflow staging server at `http://source-landing-pages.webflow.io/[page_name]`
2. To publish to Architizer’s staging server, also check the 'webflow.architizer.com’ URL, but only do this when you’ve made 1000% sure that no changes have accidentally made to the other pages. ALWAYS check the other pages and forms.

#### 7. Test your forms by filling them out and making sure that they are being funneled into Eloqua correctly
#### 8. Move page into appropriate URL folder
1. When you created a new page you noticed the folder structure in the Pages pane…This structure is how we control what pages are pushed where.
2. When we publish our pages to `webflow.architizer.com`, we are actually using that as a proxy to `http://architizer.com/`
3. All landing pages will reside within the `architizer.com/go/[business_unit/[page_name]` hierarchy
4. Therefore, if you are building a landing page for Source, move the page into the “source” folder in webflow, which already exists in the “go” folder

## URL Naming Convention
As stated above, all landing pages live within the /go/[business_unit] folder. If your business unit doesn’t exist, feel free to create it and move it into the “go” folder. 

##### Source Landing Pages
`/go/source/[page_name]`

##### Architizer Landing Pages
`/go/a/[page_name]`

## Current Landing Pages
Source for Manufacturers - http://architizer.com/go/source/manufacturers

Source for Architects - http://architizer.com/go/source/architects

Source - http://architizer.com/go/source/architizer-source

Media Kit - http://architizer.com/go/a/media-kit 

Claim Brand - http://architizer.com/go/a/claim-brand
