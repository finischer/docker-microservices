from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class AddProductForm(FlaskForm):
    product_name = StringField('Produktname', validators=[DataRequired()])
    submit = SubmitField('Produkt hinzufügen')