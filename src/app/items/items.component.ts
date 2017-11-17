import { Component, OnInit } from '@angular/core';
import { RetrieveItemsService } from '../services/retrieve-items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items = [{"asin":"B00004RDBL","description":"After the congratulatory toasts have been made and the bubbly sipped, there might be a little left over. You don\u0027t want to drink it; you don\u0027t want to throw it away. Plug Pedrini\u0027s handy Italian-made champagne stopper over the top and forget worrying about spilling or losing effervescence. This stopper should fit most any champagne bottle, and the clips extend almost an inch below the bottle top for a sure grip. To use, place the rubber stopper on the bottle with the two stainless-steel side clips open, then press the clips down firmly to lock the stopper in place.--Doree Armstrong","title":"Pedrini Champagne Stopper","imUrl":"http://ecx.images-amazon.com/images/I/415D47D64PL._SY300_.jpg","salesRank":{"Kitchen \u0026 Dining":768154.0},"categories":["Home \u0026 Kitchen","Kitchen \u0026 Dining","Kitchen Utensils \u0026 Gadgets","Bar \u0026 Wine Tools","Wine Stoppers \u0026 Pourers"],"price":8.83},{"asin":"B00004RDB0","description":"Easy-to-understand controls, sturdy construction, and a large 56-ounce glass jar make this Hamilton Beach blender a very practical part of your kitchen. This Power Elite blender has six functions from stir to liquefy and 18 speeds. This powerful 450-watt blender can be pulsed manually, set on auto-crush for reducing ice cubes to the consistency of coarse snow, or put on a continuous run for longer blending cycles. The leakproof lid, with filler cap opening, screws tightly onto the jar. The jar assembly is easy to take apart for cleaning. The plastic parts get washed in the sink, while the glass jar can go into the dishwasher. Hide-away cord storage under the base makes the unit easier to store.--Dale Steinke","title":"Hamilton Beach 56400 Power Elite Blender","imUrl":"http://ecx.images-amazon.com/images/I/31RHG4G9C9L._SY300_.jpg","salesRank":{"Kitchen \u0026 Dining":832705.0},"categories":["Home \u0026 Kitchen","Kitchen \u0026 Dining","Dining \u0026 Entertaining","Bar Tools \u0026 Glasses","Ice Crushers"],"price":0.0},{"asin":"B00004RDBS","description":"Pedrini\u0027s shot glass is larger than a standard shot glass and includes easy-to-read gray measurement lines for 1- and 1-1/4-ounce shots. Ideal for making complicated mixed drinks accurately every time, the glass is stenciled with the Pedrini logo and has an easy-grip bottom. A quality addition to any collection of barware, Pedrini\u0027s shot also makes a nice hostess gift.--Julie McCowan","title":"Pedrini Shot Glass","imUrl":"http://ecx.images-amazon.com/images/I/41RS79JPVVL._SY300_.jpg","salesRank":{"Kitchen \u0026 Dining":780782.0},"categories":["Home \u0026 Kitchen","Kitchen \u0026 Dining","Dining \u0026 Entertaining","Glassware \u0026 Drinkware","Shot Glasses"],"price":0.0},{"asin":"B00004RDAK","description":"When you cook with this saucepan, your soups and sauces will pour easily into the bowl or onto the plate instead of sticking to the pan\u0027s bottom. And Farberware\u0027s advanced hard-anodized nonstick surface will keep food from sticking for years to come. The recessed pattern in the pan bottom creates tiny air pockets that enhance browning and saut\u0026eacute;ing--little or no oil is needed-and ensure an easy cleanup. The pan\u0027s stainless-steel design is both stylish and durable (the pan has a lifetime warranty), and the specially designed handles stay cool on the stovetop. To clean the pan, hand wash with a mild detergent.--Linda Dahlstrom","title":"Farberware Millennium Hard Anodized Nonstick 2-Quart Saucepan with Lid","imUrl":"http://ecx.images-amazon.com/images/I/31PC5Y5E6PL._SX300_.jpg","salesRank":{"Kitchen \u0026 Dining":946949.0},"categories":["Home \u0026 Kitchen","Kitchen \u0026 Dining","Cookware","Saucepans"],"price":0.0},{"asin":"B00004RD9K","description":"An engineer designed Chantal\u0027s high-quality cookware, and it shows. Not only is it so gorgeous you\u0027ll never want to put it in the cupboard, but underneath that beautiful exterior lies seriously rugged construction. Uniquely crafted of high-fired glass enamel on carbon steel, these pots and pans heat quickly without reacting with food, so meals are safe and healthy. All Chantal pieces are stick resistant, but the two saut\u0026#xE9; pans in this set have an additional nonstick surface which is also nonporous (unlike most brands), so they won\u0027t absorb foods or oil. Whip up a white wine Gorgonzola cream sauce in the 1-1/2- or 3-quart saucepans and boil some pasta to go with it in the 6-quart stockpot. The saut\u0026#xE9; pans, sized 8 and 10 inches respectively, are equipped with shallow ridges, so foods won\u0027t stick and need less oil; a handsome 3-quart casserole dish transitions beautifully from oven to table. Chantal\u0027s split stay-cool handles keep hands from burning, and their glass lids are shatter resistant and oven-safe to 375 degrees. Though this cookware\u0027s enamel is chip resistant and extremely strong, avoid dropping it on ceramic floors or in the kitchen sink, and be aware of overheating. Hand washing is recommended, especially for the saut\u0026#xE9; pans.--Meg HeffernanWhat\u0027s in the Box1-1/2-quart saucepan with lid, 3-quart saucepan with lid, 6-quart stockpot with lid, 8-inch saut\u0026#xE9; pan, 10-ich saut\u0026#xE9; pan, 3-quart casserole with lid","title":"Chantal Enamel-On-Steel 10-Piece Set, White","imUrl":"http://ecx.images-amazon.com/images/I/41SGRT1C9QL._SX300_.jpg","salesRank":{"Kitchen \u0026 Dining":913437.0},"categories":["Home \u0026 Kitchen","Kitchen \u0026 Dining","Cookware","Cookware Sets"],"price":0.0},{"asin":"B00004RDBW","description":"Drop in a couple of ice cubes, turn the crank, and fluffy ice shavings drop into the bottom half of the unit. Scoop the shaved ice into a cup or bowl, and drizzle with flavored syrup for a refreshing treat. Or, use the ice as an appealing-looking bed for oysters on the half shell. This Italian-made ice shaver is best for small jobs, as turning the crank can be a workout for larger volumes of ice.--Dale Steinke","title":"Pedrini Ice Shaver","imUrl":"http://ecx.images-amazon.com/images/I/21RFD3JW1VL._SY300_.jpg","salesRank":{"Kitchen \u0026 Dining":942340.0},"categories":["Home \u0026 Kitchen","Kitchen \u0026 Dining","Dining \u0026 Entertaining","Bar Tools \u0026 Glasses","Ice Crushers"],"price":0.0}]; 
  constructor(private dbService: RetrieveItemsService) { }

  ngOnInit() {
    this.dbService.getItems().subscribe(items=>{
     // console.log(items['_body']); 
     // this.items = items['_body']; 
    });
  }

}
