
from django.contrib import admin
from django.urls import path
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from .views import *

router = routers.DefaultRouter()
router.register('cart',MyCart,basename="MyCart")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('categoryproducts/', CategoryProductView.as_view()),
    path('categoris/', CategorisView.as_view()),
    path('singlecategoris/<int:pk>/', SingleCategoryView.as_view()),
    path('singlebrands/<int:pk>/', SingleBrandsProducts.as_view()),
    path('singleproduct/<int:pk>/', SingleProductView.as_view()),
    path('brandsname/', BrandSNameView.as_view()),
    path('brandsname/', BrandSNameView.as_view()),
    path('trandingproducts/', TrandingProductsView.as_view()),
    path('sliders/', SliderView.as_view()),
    path('addproductview/', AddViewProduct.as_view()),
    path('mostviewproducts/', MostViewsProducts.as_view()),
    path('search/<str:q>/', SearchView.as_view()),
    path('apilogin/', obtain_auth_token),
    path('profile/', ProfileView.as_view()),
   
    path('register/', RegisterUserView.as_view()),
    path('updateuser/', Updateuser.as_view()),
    path('Updateimage/', updateimage.as_view()),
    path('appproduct/', AllproductView.as_view()),
    path('appallproduct/', detailsallProduct.as_view()),
   
]