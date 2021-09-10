from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class EditProductForm(FlaskForm):
    product_name = StringField('Name', validators=[DataRequired()])
    submit = SubmitField('Speichern')