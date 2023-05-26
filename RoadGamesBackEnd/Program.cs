var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();

var app = builder.Build();


 
app.UseCors(builder => builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader()
);
app.MapGet("/", () => TypedResults.Ok("Hello Marj World!"));

app.Run();