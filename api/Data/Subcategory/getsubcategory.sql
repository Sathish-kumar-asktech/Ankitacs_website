select
    Category_Code,
    pc.MainCategory_Id,
    Category_Id,
    Category_Description,
    MainCategory_Description,
    pc.Active
from
    TBS_PRODUCT_CATEGORY_MST as pc
    inner join Tbs_MainCategory_Mst as m on m.MainCategory_Id = pc.MainCategory_Id
where
    pc.Active = 'Y'
    And pc.MainCategory_Id = @MainCategory_Id
order by
    pc.Category_Id desc