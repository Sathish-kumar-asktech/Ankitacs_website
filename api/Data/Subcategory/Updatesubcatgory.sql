update
    TBS_PRODUCT_CATEGORY_MST
set
    Category_Code = @Category_Code,
    Category_Description = @Category_Description,
    Modify_By = @Modify_By,
    Modify_Date = @Modify_Date,
    Active = @Active,
    MainCategory_Id = @MainCategory_Id
where
    Category_Id = @Category_Id