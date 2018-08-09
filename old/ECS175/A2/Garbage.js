//Garbage can found in image: https://popiwinters.files.wordpress.com/2011/02/cimg0047.jpg
function Garbage(sideLength, height, lipPosition, lipThickness, holeRadius, discRadius){
  this.topCementPart = new Mesh([125 / 255, 132 / 255, 113 / 255, 1]);
  this.bottomCementPart = new Mesh([125 / 255, 132 / 255, 113 / 255, 1]);
  this.diskPart = new Mesh([0, 168 / 255, 107 / 255, 1]);
  this.lipPart = new Mesh([0, 168 / 255, 107 / 255, 1]);


}

function createRectangularPrismWithCircularHole(mesh, sideLength, height, radius, divisions){
  var vertices = [];
  var faces = [];

  for(i = 0; i < divisions; i++){
    var radians = i * 2 / divisions * Math.PI;
    var insidePoint = [radius * Math.cos(radians), height / 2, radius * Math.sin(radians)];
    var outsidePoint;
    if(radians < Math.PI / 4){
      outsidePoint = [sideLength/2, height/2, sideLength/2 * Math.tan(radians)];
    }
    else if(radians >= Math.PI/4 && radians < Math.PI * 3 / 4){
      outsidePoint = [(sideLength/2) * Math.tan(radians - Math.PI/2), height/2, sideLength/2];
    }
    else if(radians >= Math.PI * 3 / 4 && radians < Math.PI * 5 / 4){
      outsidePoint = [-sideLength/2, height/2, -(sideLength/2 * Math.tan(radians - Math.PI))];
    }
    else if(radians >= Math.PI * 5 / 4 && radians < Math.PI * 7 / 4){
      outsidePoint = [-(sideLength/2 * Math.tan(radians - Math.PI * 3 / 2)), height/2, sideLength/2];
    }
    else{
      outsidePoint = [sideLength/2, height/2, sideLength/2 * Math.tan(radians - Math.PI * 2)];
    }
    Array.prototype.push.apply(vertices, insidePoint);
    Array.prototype.push.apply(vertices, outsidePoint);
    var bottomOutsidePoint = [outsidePoint[0], -outsidePoint[1], outsidePoint[2]];
    var bottomInsidePoint = [insidePoint[0], -insidePoint[1], insidePoint[2]];
    Array.prototype.push.apply(vertices, bottomOutsidePoint);
    Array.prototype.push.apply(vertices, bottomInsidePoint);
  }

  mesh.vertices = vertices;
  mesh.faces = faces;
}

function createDiscWithCircularHole(mesh, discRadius, holeRadius, divisions){
  var vertices = [];
  var faces = [];
  for(i = 0; i < divisions; i++){
    var radians = i * 2 / divisions * Math.PI;
    var insidePoint = [holeRadius * Math.cos(radians), 0, holeRadius * Math.sin(radians), 1.0];
    var outsidePoint = [discRadius * Math.cos(radians), 0, discRadius * Math.sin(radians), 1.0];

    Array.prototype.push.apply(vertices, insidePoint);
    Array.prototype.push.apply(vertices, outsidePoint);

    if(i >= 1){
      faces.push(2 * i + 1);
      faces.push(2 * i);
      faces.push(2 * i - 1);
      faces.push(2 * i);
      faces.push(2 * i - 2);
      faces.push(2 * i - 1);
    }
  }
  //Array.prototype.push.apply(faces, [1, 0, 2 * divisions, 0, 2 * divisions - 1, 2 * divisions]);

  mesh.vertices = vertices;
  mesh.faces = faces;
}
