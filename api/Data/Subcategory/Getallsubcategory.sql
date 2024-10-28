select
    Category_Code,
    Category_Id,
    Category_Description,
    MainCategory_Description,
    pc.MainCategory_Id,
    pc.Active
from
    TBS_PRODUCT_CATEGORY_MST as pc
    left outer join Tbs_MainCategory_Mst as mc on mc.MainCategory_Id = pc.MainCategory_Id
order by
    Category_Id desc