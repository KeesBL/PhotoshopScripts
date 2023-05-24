var doc = app.activeDocument;
var width = doc.width;
var height = doc.height;
var isHorizontalImage = width > height;

// Create watermark layer
var layer = doc.artLayers.add();
layer.kind = LayerKind.TEXT;

// Create text watermark
var text = layer.textItem;
text.font = "FuturaBT-Light";
text.justification = Justification.RIGHT;
text.contents = "Kees Beemster Leverenz";

// Set text watermark color
var whiteColor = new SolidColor();
whiteColor.rgb.red = 255;
whiteColor.rgb.green = 255;
whiteColor.rgb.blue = 255;
text.color = whiteColor;
text.opacity = 80;

// Move text watermark
var horizontalPosition = 0;
var verticalPosition = 0;
if (isHorizontalImage)
{
	horizontalPosition = height - 0.012 * height;
	verticalPosition = width - 0.009 * width;
}
else
{
	horizontalPosition = height - 0.009 * height;
	verticalPosition = width - 0.012 * width;
}
text.position = new Array(verticalPosition, horizontalPosition);

// Scale text watermark
app.preferences.rulerUnits = Units.PIXELS;
if (isHorizontalImage)
{
	text.size = height * 0.008;
}
else
{
	text.size = width * 0.008;
}

