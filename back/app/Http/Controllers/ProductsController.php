<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use Auth;

class ProductsController extends Controller
{
    public function index()
    {
      return Product::orderBy('updated_at','desc')->get();
    }

    public function store(Request $request)
    {
      // Image Upload
      $exploded = explode(',',$request->image);
      $decoded  = base64_decode($exploded[1]);

      if (str_contains($exploded[0],'jpeg'))
          $extention ='jpg';
      else
          $extention ='png';

      $fileName = $request->name.'_'.date("d-m-Y").'_'.date("h-i-sa").'.'.$extention;

      $path = public_path().'\\Products\\'.$fileName;
      file_put_contents($path,$decoded);



      $product = Product::create($request->except('image') + [
        'user_id'=>Auth::id(),
        'image'=>$fileName
      ]);
      //
      return $product;
    }

    public function show($id)
    {
        $product = Product::find($id);
        if (count($product)>0)
          return response()->json($product);

          return response()->json(['error'=> 'Resource Not Found'],404);
    }

    public function update(Request $request ,$id)
    {
      $product = Product::find($id);
      $product->update($request->all());

      return response()->json($product);
    }

    public function destroy($id)
    {
      try {
        Product::destroy($id);
        return response([],204);

      } catch (\Exception $e) {
        return response(['Problem deleting product',500]);
      }

    }

}
