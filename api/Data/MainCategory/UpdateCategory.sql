update
    Tbs_MainCategory_Mst
set
    MainCategory_Description = @MainCategory_Description,
    Active = @Active,
    Modify_By = @Modify_By,
    Modify_Date = @Modify_Date
where
    MainCategory_Id = @MainCategory_Id