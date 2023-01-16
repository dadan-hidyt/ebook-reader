<?php

namespace App\Http\Controllers;

use Dotenv\Validator;
use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class ApiController extends Controller {
	public function authtenticate(Request $request) {
		$credential = $request->only('email', 'password');
		$validator = \Illuminate\Support\Facades\Validator::make($credential, [
			'email' => 'required|email',
			'password' => 'required|string|min:6|max:50',
		]);
		if ($validator->fails() === TRUE) {
			return response()->json([
				'status' => false,
				'error' => $validator->messages(),
			], 200);
		}
		try {
			if (!$token = JWTAuth::attempt($credential)) {
				return response()->json([
					'success' => false,
					'messages' => 'Email and password not found',
				], 400);
			}
		} catch (JWTException $th) {
			return response()->json([
				'success' => false,
				'messages' => 'Could Not created token',
			], 500);
		}
		return response()->json([
			'status' => true,
			'token' => $token,
		]);
	}

	public function user_data(Request $request) {
		$token = $request->validate([
			'token' => 'required',
		]);
		$user = JWTAuth::authenticate($request->bearerToken());
		return response()->json([
			'user' => $user,
			'status' => true,
		]);
	}
	public function getBook() {
		$user = JWTAuth::parseToken()->authenticate();
		return $user->book()->get();
	}
	public function find(Request $request) {
		$user = JWTAuth::parseToken()->authenticate();
		return $user->book()->find($request->get('id'));
	}
}
