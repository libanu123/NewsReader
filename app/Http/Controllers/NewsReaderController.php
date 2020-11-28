<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewsReaderController extends Controller
{
    public function index()
    {
        return view('index');
    }
}
