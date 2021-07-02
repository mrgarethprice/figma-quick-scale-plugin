const selection = figma.currentPage.selection;

if (selection) {
  for (const node of selection as any) {
    if (figma.command == "ten") {
      node.rescale(0.1);
    } else if (figma.command == "twenty") {
      node.rescale(0.2);
    } else if (figma.command == "thirty") {
      node.rescale(0.3);
    } else if (figma.command == "fourty") {
      node.rescale(0.4);
    } else if (figma.command == "fifty") {
      node.rescale(0.5);
    } else if (figma.command == "sixty") {
      node.rescale(0.6);
    } else if (figma.command == "seventy") {
      node.rescale(0.7);
    } else if (figma.command == "eighty") {
      node.rescale(0.8);
    } else if (figma.command == "ninety") {
      node.rescale(0.9);
    } else if (figma.command == "oneFifty") {
      node.rescale(1.5);
    } else if (figma.command == "twoHundred") {
      node.rescale(2);
    } else if (figma.command == "threeHundred") {
      node.rescale(3);
    } else if (figma.command == "paperUp") {
      node.rescale(1.41);
    } else if (figma.command == "paperDown") {
      node.rescale(0.71);
    }
    else if (figma.command == "upOne") {
      node.rescale(1.01);
    }
    else if (figma.command == "downOne") {
      node.rescale(0.99);
    }
    else if (figma.command == "upTen") {
      node.rescale(1.10);
    }
    else if (figma.command == "downTen") {
      node.rescale(0.90);
    }
  }
}

figma.closePlugin();


