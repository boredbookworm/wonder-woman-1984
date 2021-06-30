// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002000101010001010101000101010101010001010104000101010001010001010100010101000000000000000500000101000001010001010101000000000101010104000005010101010401000001010101000001010100010104010000000101000001010100000001000100010001010100010101000100010001000100010101000005040001000000010001010101010001010100010101010100010101000004000000000101000101000000010101000001000101010000010001010104000500010001000400000005010101000000000100010001010101010101010101010001000100010000040000000301010100010001000000010101010101`, img`
. . 2 2 2 . 2 2 2 2 . 2 2 2 2 2 
2 . 2 2 2 . . 2 2 2 . 2 2 . 2 2 
2 . 2 2 2 . . . . . . . . . . 2 
2 . . 2 2 . 2 2 2 2 . . . . 2 2 
2 2 . . . . 2 2 2 2 . 2 . . 2 2 
2 2 . . 2 2 2 . 2 2 . 2 . . . 2 
2 . . 2 2 2 . . . 2 . 2 . 2 . 2 
2 2 . 2 2 2 . 2 . 2 . 2 . 2 . 2 
2 2 . . . . . 2 . . . 2 . 2 2 2 
2 2 . 2 2 2 . 2 2 2 2 2 . 2 2 2 
. . . . . . . 2 2 . 2 2 . . . 2 
2 2 . . 2 . 2 2 2 . . 2 . 2 2 2 
. . . . 2 . 2 . . . . . . 2 2 2 
. . . . 2 . 2 . 2 2 2 2 2 2 2 2 
2 2 2 . 2 . 2 . 2 . . . . . . . 
2 2 2 . 2 . 2 . . . 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorDark1,sprites.dungeon.stairWest,sprites.dungeon.stairLarge,myTiles.tile1,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile1":return tile1;
            case "tile2":return tile2;
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
