    

 Insert into TBS_PRODUCT_CATEGORY_MST   
 (
Category_Code,
Category_Description,
Created_By,
Created_Date,

Active,
MainCategory_Id)  
 Values   
(
   @Category_Code,
@Category_Description,
@Created_By,
@Created_Date,

'Y',
@MainCategory_Id

) 
 SELECT SCOPE_IDENTITY() AS Category_Id    

 