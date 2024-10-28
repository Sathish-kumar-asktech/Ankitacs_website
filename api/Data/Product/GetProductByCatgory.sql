select
    TPD.Product_Details_Id,
    TPD.Product_Details_Description,
    TPD.Product_Details_Code,
    TPD.Category_Id,
    TPD.Rate,
    TPD.UOM,
    TPD.Active,
    TPD.Image,
    TPC.Category_Description,
    TMM.MainCategory_Description
from
    TBS_PRODUCT_DETAILS_MST as TPD
    left outer join TBS_PRODUCT_CATEGORY_MST as TPC on TPD.Category_Id = TPC.Category_Id
    left outer join Tbs_MainCategory_Mst as TMM on TPC.MainCategory_Id = TMM.MainCategory_Id
where
    TMM.MainCategory_Id = @MainCategory_Id