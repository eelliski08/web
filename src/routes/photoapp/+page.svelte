<h1> Alla fina bilder hittar du här</h1>


<script>
let image = "https://picsum.photos/id/70/367/267"
let photo = "https://picsum.photos/id/88/367/267"
let picture = "https://picsum.photos/id/93/367/267"
</script>



  <div class="photos">
    <div class="image-wrapper">
      <img src={image} alt="Flexbox egenskaper"></div>
        <div class="image-wrapper">


    <img src={photo} alt="Flexbox egenskaper"></div>
        <div class="image-wrapper">


    <img src={picture} alt="Flexbox egenskaper">
        </div>


   
  </div>


  <style class="image-wrapper">
      .photos {
        display:flex;
       max-width: 100vW;
         align-items: center;
        justify-content: center;
      }


      .image-wrapper img{
        width:100%;
        height: 60vh;
        background-color: rgb(97, 91, 91);
        box-shadow: 4px 8px 0px rgba(10,10,10,0.2);
        padding: 10px;
  
 
      }


    .image-wrapper { width: 100%; flex:1; border-radius: 20px; overflow: hidden;
      transition: flex-grow 1s;
      }
     
    .image-wrapper:hover { flex-grow:1.25; }


   
    .image-wrapper:active { transform: scale(0.9); }


 
  h1{
      text-align: center;
      font-size: 50px;
      margin: 20px;
      color: rgb(137, 134, 134);
  
  }


  </style>







