update TBS_PRODUCT_DETAILS_MST set

Product_Details_Description=@Product_Details_Description,
Product_Details_Code=@Product_Details_Code,
Category_Id=@Category_Id,
Rate=@Rate,
UOM=@UOM,
Modify_By=@Modify_By,
Modify_Date=@Modify_Date,
Active=@Active,
Image=@Image

where Product_Details_Id=@Product_Details_Id