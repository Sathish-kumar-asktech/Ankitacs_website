Insert into
    TBS_PRODUCT_DETAILS_MST (
        Product_Details_Description,
        Product_Details_Code,
        Category_Id,
        Rate,
        UOM,
        Created_By,
        Created_Date,
        Active,
        Image
    )
Values
    (
        @Product_Details_Description,
        @Product_Details_Code,
        @Category_Id,
        @Rate,
        @UOM,
        @Created_By,
        @Created_Date,
        @Active,
        @Image
    )
SELECT
    SCOPE_IDENTITY() AS Product_Details_Id