package io.s4m.hiring.homework.adapter.model

data class PointOfInterestModel(
    val name: String,
    val address: String,
    val city: String,
    val state: String,
    val latitude: Double,
    val longitude: Double
)