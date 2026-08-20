import sys
import rembg
from PIL import Image

input_img = Image.open('public/images/akshita-avatar.png')
output_img = rembg.remove(input_img)
# Get bounding box of non-zero alpha
bbox = output_img.getbbox()
if bbox:
    output_img = output_img.crop(bbox)
output_img.save('public/images/akshita-avatar-transparent.png')
print('Success!')
