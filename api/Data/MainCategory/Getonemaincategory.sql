select
    MainCategory_Id,
    MainCategory_Description,
    Active
from
    Tbs_MainCategory_Mst
where
    MainCategory_Id = @MainCategory_Id