IF EXISTS (
    SELECT
        *
    FROM
        TBS_PRODUCT_CATEGORY_MST
    WHERE
        MainCategory_Id = @MainCategory_Id
) BEGIN RAISERROR(
    'Cannot delete category because it exists in TBS_PRODUCT_DETAILS_MST.',
    16,
    1
);END ELSE BEGIN
Delete from
    Tbs_MainCategory_Mst
where
    MainCategory_Id = @MainCategory_Id END