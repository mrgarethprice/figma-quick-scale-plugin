/// <reference types="@figma/plugin-typings" />
const selection = figma.currentPage.selection;
// Type guard to check if a node supports resize operations
function supportsResize(node) {
    return "resize" in node && "width" in node && "height" in node;
}
// Function to resize node to specific width while maintaining aspect ratio
function resizeWidth(node, targetWidth) {
    if (!supportsResize(node)) {
        figma.notify("Selected node does not support resizing");
        return;
    }
    const scale = targetWidth / node.width;
    const newHeight = Math.round(node.height * scale);
    node.resize(targetWidth, newHeight);
}
if (selection) {
    for (const node of selection) {
        if (!("rescale" in node)) {
            figma.notify("Selected node does not support scaling");
            continue;
        }
        if (figma.command == "ten") {
            node.rescale(0.1);
        }
        else if (figma.command == "twenty") {
            node.rescale(0.2);
        }
        else if (figma.command == "thirty") {
            node.rescale(0.3);
        }
        else if (figma.command == "fourty") {
            node.rescale(0.4);
        }
        else if (figma.command == "fifty") {
            node.rescale(0.5);
        }
        else if (figma.command == "sixty") {
            node.rescale(0.6);
        }
        else if (figma.command == "seventy") {
            node.rescale(0.7);
        }
        else if (figma.command == "eighty") {
            node.rescale(0.8);
        }
        else if (figma.command == "ninety") {
            node.rescale(0.9);
        }
        else if (figma.command == "oneFifty") {
            node.rescale(1.5);
        }
        else if (figma.command == "twoHundred") {
            node.rescale(2);
        }
        else if (figma.command == "threeHundred") {
            node.rescale(3);
        }
        else if (figma.command == "paperUp") {
            node.rescale(1.41);
        }
        else if (figma.command == "paperDown") {
            node.rescale(0.71);
        }
        else if (figma.command == "upOne") {
            node.rescale(1.01);
        }
        else if (figma.command == "downOne") {
            node.rescale(0.99);
        }
        else if (figma.command == "upTen") {
            node.rescale(1.1);
        }
        else if (figma.command == "downTen") {
            node.rescale(0.9);
        }
        // Android devices
        else if (figma.command == "width412") {
            resizeWidth(node, 412); // Android Compact
        }
        else if (figma.command == "width700") {
            resizeWidth(node, 700); // Android Medium
        }
        // iPhone 16 series
        else if (figma.command == "width393") {
            resizeWidth(node, 393); // iPhone 16
        }
        else if (figma.command == "width402") {
            resizeWidth(node, 402); // iPhone 16 Pro
        }
        else if (figma.command == "width440") {
            resizeWidth(node, 440); // iPhone 16 Pro Max
        }
        else if (figma.command == "width430") {
            resizeWidth(node, 430); // iPhone 16 Plus
        }
        // iPhone 14 & 15 series
        else if (figma.command == "width430_14") {
            resizeWidth(node, 430); // iPhone 14 & 15 Pro Max
        }
        else if (figma.command == "width393_14") {
            resizeWidth(node, 393); // iPhone 14 & 15 Pro
        }
        else if (figma.command == "width390") {
            resizeWidth(node, 390); // iPhone 13 & 14
        }
        else if (figma.command == "width428") {
            resizeWidth(node, 428); // iPhone 14 Plus
        }
        // Other iPhones
        else if (figma.command == "width375") {
            resizeWidth(node, 375); // iPhone 13 mini
        }
        else if (figma.command == "width320") {
            resizeWidth(node, 320); // iPhone SE
        }
    }
}
figma.closePlugin();
