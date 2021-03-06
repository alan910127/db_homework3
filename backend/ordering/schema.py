from ordering import ma

class UserSchema(ma.Schema):
    class Meta:
        fields = ('realname', 'role', 'account', 'phone', 'password', 'latitude', 'longitude', 'balance', 'shopname')

class ShopSchema(ma.Schema):
    class Meta:
        fields = ('shopname', 'category', 'latitude', 'longitude')

class MealSchema(ma.Schema):
    class Meta:
        fields = ('name', 'shopname', 'image', 'price', 'quantity')

class OrderSchema(ma.Schema):
    class Meta:
        fields = ('OID', 'status', 'startTime', 'endTime', 'shopname', 'subtotal', 'deliverFee', 'customer', 'type')

class OrderDetailSchema(ma.Schema):
    class Meta:
        fields = ('ID', 'OID', 'shopname', 'image', 'mealname', 'price', 'quantity')

class TransactionSchema(ma.Schema):
    class Meta:
        fields = ('RID', 'OID', 'account', 'trader', 'traderRole', 'action', 'time', 'amount')